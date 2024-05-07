This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Google Clone

This project is a Google clone that allows users to search for results in both web and images. It replicates the core functionality of Google search, providing a familiar interface for users to perform searches and browse through search results.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- npm or yarn

### Installing

A step-by-step guide to get a development environment running.

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
```

2. Install dependencies:

```bash
cd your-project
npm install
```

### Environment Variables

Explain the purpose of each environment variable used in the project and how to set them up.

- **GOOGLE_API_KEY**: Used to fetch data from Google for Google searches. [Programmable Search Engine](https://programmablesearchengine.google.com/about/)
- **NEXT_PUBLIC_IP_API_KEY**: Used for generating the country from where the user is browsing. [IP Location API](https://extreme-ip-lookup.com/)
- **CONTEXT_KEY**: Used for the Google fetch URL. [Search engine ID which could be accessed after creating a new search engine](https://programmablesearchengine.google.com/about/)

Create a `.env.local` file in the root directory of your project and add the following:

```plaintext
GOOGLE_API_KEY=your-google-api-key
NEXT_PUBLIC_IP_API_KEY=your-ip-api-key
CONTEXT_KEY=your-context-key
```

Replace `your-google-api-key`, `your-ip-api-key`, and `your-context-key` with your actual API keys.

### Running the Project

Instructions on how to run the project locally.

```bash
npm run dev
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework used for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs quickly.
- [react-icons](https://react-icons.github.io/react-icons/) - A library for easily adding popular icons to React projects.
- [html-react-parser](https://github.com/remarkablemark/html-react-parser) - A utility for parsing HTML strings into React elements, used for bolding search term keywords in search results.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
