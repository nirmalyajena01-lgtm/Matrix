export type Severity='CRITICAL'|'HIGH'|'MEDIUM'|'LOW';
const rules:Record<string,Severity>={FIRE:'CRITICAL',MEDICAL:'CRITICAL',HARASSMENT:'HIGH',ACCIDENT:'HIGH',UNSAFE_LOCATION:'MEDIUM',INFRASTRUCTURE_FAILURE:'MEDIUM',OTHER:'LOW'};
export function classify(category:string,description:string):Severity{
  const base=rules[category]??'LOW';
  const d=description.toLowerCase();
  const critical=/unconscious|collapsed|bleeding heavily|fire|smoke|trapped|weapon|life threatening/.test(d);
  const high=/injury|threat|assault|harass|danger/.test(d);
  if(critical)return 'CRITICAL';
  if(high && base==='LOW')return 'HIGH';
  return base;
}
export const slaSeconds=(s:Severity)=>s==='CRITICAL'?300:s==='HIGH'?600:s==='MEDIUM'?1800:3600;
