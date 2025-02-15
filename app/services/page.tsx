import ServicesList from "@/components/ServicesList";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-16">
      <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">
        Our Services
      </h1>
      <ServicesList />
    </main>
  );
}
