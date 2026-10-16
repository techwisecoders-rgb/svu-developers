'use client';
import { Share2 } from "lucide-react";
export function ShareButton(){return <button className="button button-outline-dark" onClick={async()=>{try{if(navigator.share) await navigator.share({title:document.title,url:window.location.href});else {await navigator.clipboard.writeText(window.location.href);alert("Property link copied.");}}catch{}}}><Share2 size={16}/> Share property</button>}
