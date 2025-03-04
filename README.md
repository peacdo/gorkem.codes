# Görkem Özyılmaz - Personal Portfolio

This is my personal portfolio website built with Next.js and Tailwind CSS. It showcases my projects, experience, and skills as a developer.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Custom PNG avatar with tech icons animation
- Projects showcase with detailed information
- Experience timeline
- Tech stack visualization
- Contact information and social links
- Static export for easy deployment to any hosting platform

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom SVG components
- **Deployment**: Static export (compatible with any hosting platform)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/peacdo/gorkem.codes.git
   cd gorkem.codes
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a static export of the website:

```bash
npm run build
```

The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

## 📝 Project Structure

- `src/app/*` - Next.js app router pages
- `src/components/*` - Reusable UI components
- `src/constants/*` - Static data and configuration
- `src/data/*` - JSON data files for projects and experiences
- `public/*` - Static assets like images and fonts

## 🔄 Customization

Feel free to fork this project and customize it for your own portfolio:

1. Update personal information in `src/constants/index.jsx`
2. Modify projects in `src/data/projects.json`
3. Update experience timeline in `src/constants/index.jsx`
4. Replace the avatar image in `public/avatar.png`
5. Customize tech icons in `src/components/icons/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Design inspiration from various portfolio websites
- SVG icons from various sources including Font Awesome
- Next.js team for the amazing framework
