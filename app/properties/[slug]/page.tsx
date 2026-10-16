import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { properties } from "@/lib/data";
import { EnquiryForm } from "@/components/enquiry-form";
import { ShareButton } from "@/components/share-button";
export function generateStaticParams(){ return properties.map(p=>({slug:p.slug})); }
export default async function PropertyDetail({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const p=properties.find(x=>x.slug===slug); if(!p) notFound();
 return <main className="page-main detail-main"><div className="container detail-container"><Link href="/properties" className="back-link"><ArrowLeft size={15}/> Back to properties</Link>
 <div className="detail-gallery"><div className="detail-main-image" style={{backgroundImage:`url("${p.image}")`}}><span className="demo-badge">DEMO LISTING</span></div><div className="detail-side-image" style={{backgroundImage:`url("${p.image2}")`}}/><div className="gallery-caption">Representative imagery — not a verified photograph of this property.</div></div>
 <div className="detail-columns"><article className="detail-copy"><span className="eyebrow">{p.type.toUpperCase()} · {p.status.toUpperCase()}</span><h1>{p.title}</h1><p className="detail-location"><MapPin size={17}/>{p.location}, {p.city}</p><div className="detail-price">{p.price}</div><div className="detail-facts"><span><BedDouble/>{p.beds ? `${p.beds} BHK` : "Flexible layout"}</span><span><Bath/>{p.baths ? `${p.baths} baths` : "Details on enquiry"}</span><span><Ruler/>{p.area}</span></div><h2>About this property</h2><p>{p.description}</p><div className="notice-box">This is illustrative demo content created to preview the website. Availability, pricing, location and specifications are not verified.</div><h2>Property highlights</h2><ul className="feature-list">{p.features.map(f=><li key={f}>{f}</li>)}</ul><ShareButton/></article><aside className="detail-enquiry"><span className="eyebrow">INTERESTED?</span><h3>Let’s talk about<br/><em>your next step.</em></h3><p>Send an enquiry and the team can follow up once official contact details are configured.</p><EnquiryForm property={p.title}/></aside></div>
 </div></main>;
}