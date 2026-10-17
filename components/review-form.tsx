'use client';
import { FormEvent, useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

type Review={name:string;rating:number;message:string;date:string};
const initialReviews:Review[]=[
 {name:'Website visitor',rating:5,message:'The property enquiry process was clear and easy to follow.',date:'Sample review'},
 {name:'Home buyer',rating:4,message:'Helpful information for comparing properties and planning next steps.',date:'Sample review'},
 {name:'Property seeker',rating:5,message:'The site made it simple to find contact information and ask questions.',date:'Sample review'},
];
export function ReviewForm(){
 const [reviews,setReviews]=useState(initialReviews);const [name,setName]=useState('');const [rating,setRating]=useState(5);const [message,setMessage]=useState('');const [submitted,setSubmitted]=useState(false);
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!name.trim()||!message.trim())return;setReviews([{name:name.trim(),rating,message:message.trim(),date:'Just now'},...reviews]);setName('');setMessage('');setRating(5);setSubmitted(true);}
 return <div className="reviews-layout"><section className="reviews-list" aria-label="Visitor reviews">{reviews.map((review,i)=><article className="review-card" key={`${review.name}-${i}`}><div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({length:5},(_,n)=><Star key={n} size={15} fill={n<review.rating?'currentColor':'none'} />)}</div><p>“{review.message}”</p><div className="review-author"><strong>{review.name}</strong><span>{review.date}</span></div></article>)}<p className="review-note">Example reviews are shown for layout demonstration. Reviews submitted here are stored only in this page session and are not sent to the company.</p></section><form className="review-form-card" onSubmit={submit}><span className="eyebrow"><span className="eyebrow-line"/> YOUR EXPERIENCE</span><h2>Share a review</h2><p>Tell us about your experience with the website or your enquiry.</p><label>Your name<input value={name} onChange={e=>setName(e.target.value)} required maxLength={70} placeholder="Enter your name"/></label><fieldset className="rating-field"><legend>Your rating</legend><div className="rating-picker">{[1,2,3,4,5].map(n=><button key={n} type="button" aria-label={`${n} star${n===1?'':'s'}`} aria-pressed={rating===n} className={n<=rating?'rating-selected':''} onClick={()=>setRating(n)}><Star size={23} fill={n<=rating?'currentColor':'none'}/></button>)}</div></fieldset><label>Your review<textarea value={message} onChange={e=>setMessage(e.target.value)} required minLength={8} maxLength={800} rows={5} placeholder="Write your feedback..."/></label><button className="button button-gold review-submit" type="submit">Submit review <Star size={15}/></button>{submitted&&<p className="review-success" role="status"><CheckCircle2 size={17}/> Your review has been added to this page session.</p>}</form></div>
}
