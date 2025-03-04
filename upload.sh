#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting the upload process for your portfolio website...${NC}"

# Step 1: Build the project
echo -e "${GREEN}Step 1: Building the project...${NC}"
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}Build failed. Please fix the errors and try again.${NC}"
  exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"
echo -e "${GREEN}Static files are ready in the 'out' directory.${NC}"
echo -e "${YELLOW}You can now upload these files to your web hosting service.${NC}"

# Instructions for different hosting services
echo -e "\n${GREEN}Upload Instructions:${NC}"
echo -e "1. For traditional web hosting (FTP):"
echo -e "   - Use an FTP client like FileZilla to upload all files from the 'out' directory to your web server's root directory."
echo -e "\n2. For Netlify:"
echo -e "   - Run: netlify deploy --dir=out"
echo -e "\n3. For GitHub Pages:"
echo -e "   - Push the 'out' directory to the gh-pages branch of your repository."
echo -e "\n4. For Vercel:"
echo -e "   - Run: vercel --prod"

echo -e "\n${YELLOW}Remember to configure your web server to handle client-side routing if needed.${NC}"
echo -e "${GREEN}Happy hosting!${NC}" 