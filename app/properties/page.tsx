import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";
import { Search } from "lucide-react";

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<Record<string,string|string[]|undefined>> }) {
  const params = await searchParams;
  const location = String(params.location || "").toLowerCase();
  const type = String(params.type || "");
  const query = String(params.q || "").toLowerCase();
  const filtered = properties.filter(p =>
    (!location || p.location.toLowerCase().includes(location) || p.city.toLowerCase().includes(location)) &&
    (!type || type === "All" || p.type.toLowerCase() === type.toLowerCase()) &&
    (!query || `${p.title} ${p.location} ${p.city} ${p.type}`.toLowerCase().includes(query))
  );
  return <main className="page-main"><div className="page-hero"><div className="container"><span className="eyebrow light">PROPERTY DISCOVERY</span><h1>Find a place that<br/><em>feels like yours.</em></h1><p>Explore the possibilities. Compare details. Ask better questions.</p></div></div>
    <section className="container listing-layout"><aside className="filter-panel"><span className="eyebrow">REFINE YOUR SEARCH</span><form action="/properties">
      <label>Keyword<input name="q" defaultValue={String(params.q||"")} placeholder="Project, feature, locality"/></label>
      <label>Location<input name="location" defaultValue={String(params.location||"")} placeholder="City or locality"/></label>
      <label>Property type<select name="type" defaultValue={String(params.type||"All")}><option>All</option><option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option></select></label>
      <button className="button button-dark full-width"><Search size={16}/> Apply filters</button><a href="/properties" className="reset-link">Clear all filters</a>
    </form></aside>
    <div className="listing-results"><div className="results-heading"><div><span className="eyebrow">CURATED FOR DISCOVERY</span><h2>{filtered.length} properties <em>to explore</em></h2></div><span className="result-chip">Demo inventory</span></div>
      {filtered.length ? <div className="property-grid">{filtered.map(p=><PropertyCard key={p.slug} property={p}/>)}</div> : <div className="empty-state"><Search size={28}/><h3>No matches just yet</h3><p>Try another locality or clear your filters to see all demo properties.</p><a className="button button-dark" href="/properties">View all properties</a></div>}
    </div></section>
  </main>;
}