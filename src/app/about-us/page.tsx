import { fetchRemoteTemplate } from "@/lib/remote-template";

export const dynamic = "force-dynamic";

export default async function AboutUsPage() {
  try {
    const html = await fetchRemoteTemplate("about-us.html");
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  } catch {
    return (
      <main style={{ padding: "3rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Us</h1>
        <p>Unable to load the about page right now. Check the local snapshot and refresh.</p>
      </main>
    );
  }
}
