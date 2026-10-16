export type Property = {slug:string;title:string;type:string;location:string;city:string;price:string;beds:number;baths:number;area:string;status:string;image:string;image2:string;description:string;features:string[]};
const photos={
 modern:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
 interior:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
 tower:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
 villa:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
 plot:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
 building:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
 locality1:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
 locality2:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
 locality3:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
};
export const properties:Property[]=[
 {slug:"garden-residences-demo",title:"Garden Residences",type:"Apartment",location:"Mangalagiri",city:"Andhra Pradesh",price:"Contact for price",beds:3,baths:2,area:"1,450 sq ft",status:"Under construction",image:photos.modern,image2:photos.interior,description:"An illustrative residential listing designed to demonstrate how a property detail page can present layout, location and enquiry information. Replace this content with verified property information.",features:["Property specifications to be confirmed","Availability to be confirmed","Project documentation to be verified"]},
 {slug:"horizon-villas-demo",title:"Horizon Villas",type:"Villa",location:"Vijayawada region",city:"Andhra Pradesh",price:"Contact for price",beds:4,baths:3,area:"2,200 sq ft",status:"New launch",image:photos.villa,image2:photos.modern,description:"A sample villa listing for the SVU website preview. Official project details, exact location, price and availability must be supplied and verified before publishing.",features:["Representative architectural imagery","Amenities to be confirmed","Legal documents to be independently verified"]},
 {slug:"open-land-demo",title:"Open Land Opportunity",type:"Plot",location:"Mangalagiri outskirts",city:"Andhra Pradesh",price:"Enquire for details",beds:0,baths:0,area:"Plot size on enquiry",status:"Demo listing",image:photos.plot,image2:photos.locality1,description:"A demonstration plot listing showing how land opportunities can be represented. No ownership, title, approvals, dimensions or availability are asserted by this demo.",features:["Plot dimensions not supplied","Title and approvals require independent verification","Contact for official details"]},
 {slug:"urban-workspaces-demo",title:"Urban Workspaces",type:"Commercial",location:"Vijayawada",city:"Andhra Pradesh",price:"Contact for price",beds:0,baths:0,area:"Area on enquiry",status:"Demo listing",image:photos.building,image2:photos.tower,description:"An illustrative commercial property listing for previewing the marketplace interface. This is not a confirmed SVU property or live offer.",features:["Commercial use to be verified","Floor plan not supplied","Pricing and availability to be confirmed"]}
];
export const projects=[
 {slug:"svu-signature-demo",name:"SVU Signature Residences",location:"Location to be confirmed",image:photos.modern,description:"An illustrative project page for showcasing architecture, project information and enquiry flow. Replace with the official project profile before launch.",tags:["Residential","Project preview","Details to be confirmed"]},
 {slug:"svu-greenfields-demo",name:"SVU Greenfields",location:"Location to be confirmed",image:photos.plot,description:"A sample development profile for demonstrating a project catalogue. No actual launch, approvals, inventory or amenities are represented.",tags:["Land / plots","Project preview","Details to be confirmed"]},
 {slug:"svu-urban-demo",name:"SVU Urban Spaces",location:"Location to be confirmed",image:photos.building,description:"A demo commercial development entry. Add approved project images, specifications, timelines and legal details supplied by the company.",tags:["Commercial","Project preview","Details to be confirmed"]}
];
export const localities=[
 {name:"Mangalagiri",tag:"LOCALITY PREVIEW",image:photos.locality1},
 {name:"Vijayawada",tag:"CITY PREVIEW",image:photos.locality2},
 {name:"Amaravati region",tag:"REGION PREVIEW",image:photos.locality3}
];