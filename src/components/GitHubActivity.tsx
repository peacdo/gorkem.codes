'use client';

import { useEffect, useState } from 'react';
import { GitBranch, GitCommit, GitPullRequest, MessageCircle } from 'lucide-react';

interface WeeklyContributions {
    commits: number;
    pullRequests: number;
    issues: number;
    repositories: number;
    totalContributions: number;
}

export function GitHubActivity() {
    const [stats, setStats] = useState<WeeklyContributions | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeeklyContributions() {
            try {
                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                user(login: "peacdo") {
                                    contributionsCollection(from: "${getLastWeekDate()}", to: "${getCurrentDate()}") {
                                        totalCommitContributions
                                        totalIssueContributions
                                        totalPullRequestContributions
                                        totalRepositoriesWithContributedCommits
                                        contributionCalendar {
                                            totalContributions
                                        }
                                    }
                                }
                            }
                        `
                    }),
                });

                const data = await response.json();
                const collection = data.data?.user?.contributionsCollection;
                
                if (collection) {
                    setStats({
                        commits: collection.totalCommitContributions,
                        pullRequests: collection.totalPullRequestContributions,
                        issues: collection.totalIssueContributions,
                        repositories: collection.totalRepositoriesWithContributedCommits,
                        totalContributions: collection.contributionCalendar.totalContributions,
                    });
                }
            } catch (error) {
                console.error('Error fetching GitHub contributions:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchWeeklyContributions();
    }, []);

    if (loading) {
        return <div className="animate-pulse h-24 rounded-xl border border-border bg-gradient-to-br from-secondary/30 to-secondary/10"></div>;
    }

    return (
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm">
            {/* Hover Effect Overlay - moved to top */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content - added z-index */}
            <div className="relative z-10 p-6">
                {stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3 group/item">
                            <div className="p-2 rounded-lg bg-secondary/50 text-primary group-hover/item:bg-primary/10 transition-colors">
                                <GitCommit size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-primary">{stats.commits}</div>
                                <div className="text-xs text-muted-foreground">This Week</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group/item">
                            <div className="p-2 rounded-lg bg-secondary/50 text-primary group-hover/item:bg-primary/10 transition-colors">
                                <GitPullRequest size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-primary">{stats.pullRequests}</div>
                                <div className="text-xs text-muted-foreground">Pull Requests</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group/item">
                            <div className="p-2 rounded-lg bg-secondary/50 text-primary group-hover/item:bg-primary/10 transition-colors">
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-primary">{stats.issues}</div>
                                <div className="text-xs text-muted-foreground">Issues</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group/item">
                            <div className="p-2 rounded-lg bg-secondary/50 text-primary group-hover/item:bg-primary/10 transition-colors">
                                <GitBranch size={20} />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-primary">{stats.repositories}</div>
                                <div className="text-xs text-muted-foreground">Repositories</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Helper functions to get date strings
function getCurrentDate(): string {
    return new Date().toISOString();
}

function getLastWeekDate(): string {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString();
} 