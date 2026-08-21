'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
const Map=dynamic(()=>import('react-leaflet').then(m=>m.MapContainer),{ssr:false});
const TileLayer=dynamic(()=>import('react-leaflet').then(m=>m.TileLayer),{ssr:false});
const CircleMarker=dynamic(()=>import('react-leaflet').then(m=>m.CircleMarker),{ssr:false});
const Popup=dynamic(()=>import('react-leaflet').then(m=>m.Popup),{ssr:false});
type I={id:string;category:string;severity:string;latitude:number;longitude:number;building:string};
const fill=(s:string)=>s==='CRITICAL'?'#ef4444':s==='HIGH'?'#f97316':s==='MEDIUM'?'#facc15':'#94a3b8';
export default function CampusMap({incidents,onSelect}:{incidents:I[];onSelect:(i:I)=>void}){return <div className="h-[650px] w-full"><Map center={[20.3524,85.8185]} zoom={16} scrollWheelZoom className="h-full w-full"><TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>{incidents.map(i=><CircleMarker key={i.id} center={[i.latitude,i.longitude]} radius={11} pathOptions={{color:'#fff',weight:3,fillColor:fill(i.severity),fillOpacity:.95}} eventHandlers={{click:()=>onSelect(i)}}><Popup><b>{i.id}</b><br/>{i.category} · {i.severity}<br/>{i.building}</Popup></CircleMarker>)}</Map></div>}
