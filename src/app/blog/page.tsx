{/*
  Blog listing page (/blog)
  - Imports BlogList + mock posts data
  - Renders page title "Blog" + BlogList grid
*/}

export default function BlogPage() {
  return (
    <main className="flex flex-col flex-1">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome to our blog! Here you will find the latest news, insights, and updates on our products and industry trends. Stay tuned for regular posts covering a wide range of topics.</p>
    </main>
  );
}