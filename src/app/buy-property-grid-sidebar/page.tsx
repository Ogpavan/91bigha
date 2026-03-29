import { fetchRemoteTemplate } from "@/lib/remote-template";

export const dynamic = "force-dynamic";

export default async function BuyPropertyGridSidebarPage() {
  try {
    const html = await fetchRemoteTemplate("buy-property-grid-sidebar.html");
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  } catch {
    return (
      <main style={{ padding: "3rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Search Results</h1>
        <p>Unable to load the reference page right now. Check the network connection and refresh.</p>
      </main>
    );
  }
}
