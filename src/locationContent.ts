export interface LocationContent {
  slug: string;
  introH2: string;
  introBody: string[];
  localHeading: string;
  localBody: string[];
  localProblems: string[];
  focusServices: string[];
  caseHeading: string;
  faqs: [string, string][];
  ctaTitle: string;
  ctaText: string;
}

export const locationContent: Record<string, LocationContent> = {
  shellharbour: {
    slug: 'shellharbour',
    introH2: 'Coastal living, <em>coastal plumbing.</em>',
    introBody: [
      'Shellharbour sits right on the water, and that shapes every plumbing decision in the area. The salt air accelerates corrosion on outdoor tapware, hot water units and exposed pipework. Homes near Shellharbour Village and the waterfront see metal components fail faster than those further inland, and we factor that into every repair and replacement we do here.',
      'The housing mix ranges from renovated brick cottages along the older streets to the newer estates around Shell Cove. Each era has its own plumbing personality. The older homes often have galvanised supply lines that narrow with internal build-up, while the newer builds have PVC pipework that generally performs well but can suffer from ground movement in the first few years.',
    ],
    localHeading: 'What we see in <em>Shellharbour.</em>',
    localBody: [
      'The most common calls from Shellharbour are about coastal wear on outdoor fixtures, busy family bathrooms that need upgrading, and kitchen blockages in older homes where the original pipework has narrowed with decades of use.',
      'We also see a lot of hot water system replacements here. Outdoor units exposed to salt air have shorter lifespans, and we often recommend enclosed or coated systems for homes close to the water.',
    ],
    localProblems: [
      'Outdoor tapware and hose cocks corroding from salt air',
      'Hot water units failing earlier than expected due to coastal exposure',
      'Kitchen blockages in older homes with narrowed galvanised pipework',
      'Family bathrooms needing fixture upgrades and tapware replacement',
    ],
    focusServices: ['hot-water', 'tap-fixture-installations', 'blocked-drains', 'bathroom-renovations'],
    caseHeading: 'A recurring kitchen blockage near <em>Shellharbour Village.</em>',
    faqs: [
      ['Does the salt air really affect plumbing in Shellharbour?', 'Yes. Outdoor metal components like tapware, hose cocks and hot water unit casings corrode faster in coastal suburbs. We recommend coated or enclosed fixtures and factor the coastal exposure into our repair versus replacement advice.'],
      ['Why does my kitchen drain keep blocking in an older Shellharbour home?', 'Many older homes here have galvanised supply lines that narrow with internal build-up over decades. The pipe diameter effectively shrinks, so blockages form more easily. A camera inspection shows whether the pipe needs clearing or replacing.'],
      ['What hot water system suits a home near the waterfront?', 'Enclosed or coated systems handle salt air better than exposed metal units. Heat pumps and indoor-mounted electric systems tend to last longer in coastal positions. We can advise on the best type for your specific location.'],
      ['Do you service the newer estates around Shell Cove?', 'Yes. The newer builds in Shell Cove have modern PVC pipework but can still experience issues from ground settlement in the first few years. We handle everything from appliance installations to gas fit-offs in these homes.'],
    ],
    ctaTitle: 'Need a plumber in Shellharbour?',
    ctaText: 'From the waterfront to the village, we know the homes and the plumbing challenges that come with coastal living.',
  },

  wollongong: {
    slug: 'wollongong',
    introH2: 'Older homes, <em>modern standards.</em>',
    introBody: [
      'Wollongong has some of the oldest housing stock in the Illawarra, and that means the plumbing here has often been repaired, patched and added to over many decades. From the weatherboard cottages near the Blue Mile to the apartment buildings along Crown Street, each property has its own plumbing history that we need to understand before we start work.',
      'Apartments and townhouses in the CBD and inner suburbs present a different set of challenges. Shared water supplies, body corporate coordination and tight access all factor into how we approach a job. We are used to working within those constraints and communicating clearly with owners, tenants and building managers.',
    ],
    localHeading: 'What we see in <em>Wollongong.</em>',
    localBody: [
      'The calls we get most from Wollongong are about ageing connections in older homes, apartment fixture replacements and renovation plumbing for homes being modernised. Many cottages here still have original galvanised or lead pipework that is well past its service life.',
      'Renovation work is common too. Homeowners are upgrading kitchens and bathrooms in period homes, and that often means rerouting waste and water lines to suit modern fixtures and layouts.',
    ],
    localProblems: [
      'Original galvanised or lead pipework that needs replacing',
      'Apartment fixture replacements requiring body corporate coordination',
      'Renovation plumbing in period homes with non-standard pipework',
      'Ageing sewer connections in pre-war cottages',
    ],
    focusServices: ['renovation-plumbing', 'leak-detection', 'hot-water', 'tap-fixture-installations'],
    caseHeading: 'A dishwasher and laundry waste fix off <em>Crown Street.</em>',
    faqs: [
      ['My old Wollongong cottage has galvanised pipes. Do they need replacing?', 'If you are seeing brown water, low pressure or frequent leaks, the galvanised pipework has likely reached the end of its service life. We can inspect and show you the condition before recommending replacement. Partial replacement is sometimes possible, but full replacement is often the better long-term investment.'],
      ['Can you do plumbing work in an apartment with body corporate?', 'Yes. We coordinate with building managers and owners corporations for work in apartments and townhouses. We understand the access requirements, shared water supply arrangements and notification procedures involved.'],
      ['I am renovating a period home in Wollongong. When should the plumber come in?', 'Before you finalise the design. Older homes often have non-standard pipework that affects what is feasible. We can assess the existing plumbing and flag any issues before you commit to a layout that might be expensive to plumb.'],
      ['Do you handle emergency calls in the Wollongong CBD?', 'Yes. We provide 24/7 emergency plumbing across Wollongong, including the CBD, inner suburbs and apartment buildings. Response time from Barrack Heights is typically 25 to 30 minutes depending on traffic.'],
    ],
    ctaTitle: 'Need a plumber in Wollongong?',
    ctaText: 'From CBD apartments to hillside cottages, we understand the plumbing challenges that come with older homes and tighter access.',
  },

  'albion-park': {
    slug: 'albion-park',
    introH2: 'Growing families, <em>growing plumbing needs.</em>',
    introBody: [
      'Albion Park is a suburb in transition. The established brick homes near the village centre are being joined by newer subdivisions and family additions, and that means the plumbing needs here are changing too. Growing households need more hot water, more bathrooms and drainage that can handle the extra load.',
      'The Tongarra Road corridor and the streets near Macquarie Rivulet have a mix of post-war brick homes and newer builds. The older homes often need hot water upgrades and drainage attention, while the newer subdivisions need things like second bathroom installations and gas connections for appliances.',
    ],
    localHeading: 'What we see in <em>Albion Park.</em>',
    localBody: [
      'The most common work we do in Albion Park is hot water system upgrades for growing families, drainage repairs in older homes, and second bathroom installations for extensions and granny flats.',
      'We also handle a lot of gas fitting here. Many homes are adding gas cooktops, heaters and outdoor BBQ points as they renovate, and we run new gas lines and issue the compliance certificates.',
    ],
    localProblems: [
      'Hot water systems too small for growing households',
      'Drainage issues in older homes near the rivulet',
      'Second bathroom plumbing for extensions and family additions',
      'Gas line installations for new cooktops and appliances',
    ],
    focusServices: ['hot-water', 'renovation-plumbing', 'gas-fitting', 'bathroom-renovations'],
    caseHeading: 'A second bathroom rough-in near <em>Tongarra Road.</em>',
    faqs: [
      ['Can you add a second bathroom to my Albion Park home?', 'Yes. Whether it is part of an extension or a conversion of an existing space, we handle the rough-in, waste connections and fit-off. We plan the waste and water routes early so the new bathroom works with the existing plumbing.'],
      ['My hot water system is too small for our family now. What should I do?', 'We size the replacement based on the number of people, bathrooms and peak usage times. A growing family often needs a larger storage tank or a properly sized continuous flow unit. We help you choose the right type and capacity.'],
      ['Can you run a new gas line to a cooktop or BBQ in Albion Park?', 'Yes. We run properly sized gas lines, pressure test them, connect the appliance and issue the gas compliance certificate. Whether it is a new cooktop, a heater or an outdoor BBQ point, we do the work to standard.'],
      ['Do you handle drainage problems in the older homes near the rivulet?', 'Yes. We use CCTV drain cameras to inspect the condition of older sewer lines and identify any tree root intrusion, cracks or collapses. From there we can clear, reline or replace as needed.'],
    ],
    ctaTitle: 'Need a plumber in Albion Park?',
    ctaText: 'From hot water upgrades to second bathroom installations, we help growing households get the plumbing they need.',
  },

  dapto: {
    slug: 'dapto',
    introH2: 'Post-war homes, <em>tree root stories.</em>',
    introBody: [
      'Dapto has a high concentration of post-war brick homes with original clay or earthenware sewer lines, and those pipes are now at the age where tree root intrusion is a major issue. The mature trees that make the area leafy and pleasant are the same trees whose roots find their way into cracked pipe joints.',
      'The streets around Bong Bong Road and the foothills near Lake Illawarra have some of the most common drain problems we see in the Illawarra. Slow drains, gurgling toilets and wet patches in the lawn are often signs of root intrusion in the sewer line.',
    ],
    localHeading: 'What we see in <em>Dapto.</em>',
    localBody: [
      'Tree root intrusion in older sewer lines is the number one issue we deal with in Dapto. We use CCTV drain cameras to find the exact location and nature of the intrusion, then recommend clearing, relining or replacement depending on the condition of the pipe.',
      'Hot water system replacements are also very common here. Many Dapto homes have electric storage tanks that are past their expected lifespan, and replacing them before they fail prevents the inconvenience and potential water damage of a tank rupture.',
    ],
    localProblems: [
      'Tree root intrusion in original clay or earthenware sewer lines',
      'Slow drains and gurgling toilets caused by root blockages',
      'Hot water systems past their expected lifespan',
      'Wet patches in lawns indicating a cracked sewer line',
    ],
    focusServices: ['blocked-drains', 'hot-water', 'leak-detection', 'general-maintenance'],
    caseHeading: 'Tree roots in a sewer line near <em>Bong Bong Road.</em>',
    faqs: [
      ['Why do the drains in my Dapto home keep blocking?', 'If your home has original clay or earthenware sewer lines, tree roots have likely found their way in through cracked joints. Clearing the blockage gets water flowing again, but the roots will return if the pipe is cracked. A camera inspection shows us the condition and we can recommend pipe relining or replacement.'],
      ['What is pipe relining and does it work for Dapto homes?', 'Pipe relining inserts a resin-coated liner inside the existing pipe, creating a new pipe with no joints for roots to enter. It is particularly useful in Dapto where mature trees are common and excavation would damage established gardens or driveways.'],
      ['My hot water system is over ten years old. Should I replace it before it fails?', 'In our experience, yes. A tank that fails ruptures and can cause water damage to the home. Replacing it before failure is less disruptive and often less expensive than dealing with the aftermath. We can assess the condition and advise.'],
      ['How do I know if tree roots are in my sewer line?', 'Signs include slow drains, gurgling sounds from toilets, wet patches in the lawn over the sewer line, and recurring blockages after clearing. A CCTV drain camera inspection confirms the presence and extent of root intrusion.'],
    ],
    ctaTitle: 'Need a plumber in Dapto?',
    ctaText: 'If your drains keep blocking or your hot water system is struggling, we know the housing stock and the common problems in this area.',
  },

  warilla: {
    slug: 'warilla',
    introH2: 'Classic coastal homes with <em>character and age.</em>',
    introBody: [
      'Warilla is one of the older coastal suburbs in the Shellharbour area, with classic brick homes and low-set cottages that have been standing for decades. The plumbing in these homes reflects their age. Many still have original pipework, and the coastal position means outdoor fixtures and hot water units face salt air exposure.',
      'The streets around Warilla Beach and the lagoon have homes where the plumbing has been patched and repaired over many years. We often find a mix of pipe materials, old and new, which needs careful assessment before any major work. The proximity to the lagoon also means some homes have drainage that is affected by high water tables during heavy rain.',
    ],
    localHeading: 'What we see in <em>Warilla.</em>',
    localBody: [
      'The most common calls from Warilla are about ageing pipework that needs replacing, hot water systems that have reached the end of their life, and blocked drains in older sewer lines. The coastal position also means we replace more outdoor tapware and hose cocks here than in inland suburbs.',
      'We also see drainage issues related to the lagoon and the water table. During heavy rain, some homes experience water backing up through floor wastes and low drains, which needs proper stormwater management rather than just a drain clear.',
    ],
    localProblems: [
      'Ageing pipework with mixed pipe materials from decades of repairs',
      'Hot water systems failing from age and coastal exposure',
      'Outdoor tapware corroding from salt air',
      'Drainage issues related to the lagoon and high water table',
    ],
    focusServices: ['hot-water', 'blocked-drains', 'tap-fixture-installations', 'general-maintenance'],
    caseHeading: 'A hot water replacement near the <em>Warilla lagoon.</em>',
    faqs: [
      ['Why does my Warilla home need so many outdoor tap replacements?', 'The salt air in coastal suburbs like Warilla accelerates corrosion on exposed metal fittings. Outdoor taps, hose cocks and hot water unit casings all wear faster here. We use coated or stainless fittings where possible to extend the lifespan.'],
      ['My drains back up during heavy rain near the lagoon. Is that a plumbing problem?', 'It can be. Some homes near the lagoon have drainage affected by high water tables during heavy rain, and stormwater may back up through floor wastes. We can assess whether the issue is a blocked drain, a stormwater problem or related to the water table.'],
      ['Should I replace my old hot water system before it fails?', 'If your system is over ten years old and showing signs like rust-coloured water, a dripping relief valve or running out of hot water faster, replacement is usually the better investment. A tank rupture causes water damage and leaves you with no hot water.'],
      ['Can you assess mixed pipework in an older Warilla home?', 'Yes. Many older homes here have a combination of original and repaired pipework in different materials. We inspect the visible pipework and use drain cameras where needed to assess the condition before recommending any replacement.'],
    ],
    ctaTitle: 'Need a plumber in Warilla?',
    ctaText: 'From coastal corrosion to ageing pipework, we know the plumbing challenges that come with older homes near the beach.',
  },

  kiama: {
    slug: 'kiama',
    introH2: 'Coastal cottages on <em>sloping blocks.</em>',
    introBody: [
      'Kiama presents a unique set of plumbing challenges. The homes here range from weatherboard cottages near the harbour to newer builds on sloping blocks climbing back from the coastline. The slope affects drainage, the salt air affects fixtures, and the renovation activity in the area means we do a lot of work coordinating with builders and tilers.',
      'Homes on sloping blocks have drainage that relies on gravity, and when the fall is not right, problems appear. Slow drains, recurring blockages and sewage that does not flow properly can all trace back to incorrect fall on a sloping site. We assess the drainage carefully before recommending a fix.',
    ],
    localHeading: 'What we see in <em>Kiama.</em>',
    localBody: [
      'Coastal corrosion is a real factor in Kiama, particularly for homes near the blowhole and the harbour. We see hot water units, outdoor tapware and exposed pipework failing earlier than in inland suburbs. Renovation plumbing is also very common here, with many cottages being modernised.',
      'Drainage on sloping blocks is a recurring theme. Some homes have drainage that was installed when the block was less developed, and subsequent landscaping or building work has changed the water flow patterns. We reassess the drainage and make sure the fall is correct.',
    ],
    localProblems: [
      'Coastal corrosion on outdoor fixtures and hot water units',
      'Drainage issues on sloping blocks with incorrect fall',
      'Renovation plumbing for cottages being modernised',
      'Concealed leaks in renovated walls and vanities',
    ],
    focusServices: ['leak-detection', 'bathroom-renovations', 'hot-water', 'renovation-plumbing'],
    caseHeading: 'A concealed leak behind a new vanity near <em>Teralong Street.</em>',
    faqs: [
      ['Why do the drains on my sloping Kiama block keep causing problems?', 'Drainage on a slope relies on correct fall to work properly. If the original drainage was installed before landscaping or building changes, the fall may no longer be adequate. We assess the drainage and recommend corrections to get the flow right.'],
      ['Does coastal corrosion affect plumbing in Kiama more than inland areas?', 'Yes. Homes near the harbour and the blowhole are exposed to salt air that accelerates corrosion on metal components. Outdoor tapware, hot water unit casings and exposed pipework all have shorter lifespans here. We recommend coated or enclosed fixtures.'],
      ['I am renovating a Kiama cottage. Can you handle the plumbing?', 'Yes. We do the rough-in and fit-off for cottage renovations, coordinating with builders and tilers. We are used to working in older homes where the existing pipework may need upgrading to suit modern fixtures.'],
      ['Can you find a concealed leak behind a renovated wall?', 'Yes. We use acoustic and thermal leak detection to pinpoint leaks without tearing open walls on a guess. We trace the source, make a targeted access and repair the pipe with minimal disruption to the renovation.'],
    ],
    ctaTitle: 'Need a plumber in Kiama?',
    ctaText: 'From sloping block drainage to coastal corrosion, we understand the specific plumbing challenges of this area.',
  },

  'oak-flats': {
    slug: 'oak-flats',
    introH2: 'Post-war brick, <em>mature trees.</em>',
    introBody: [
      'Oak Flats has a high concentration of post-war brick homes with mature gardens, and the combination of older sewer lines and established trees makes tree root intrusion a very common problem here. The streets between the village and the lake foreshore have homes where the original earthenware drains are now cracked and root-infested.',
      'The lake foreshore position also means some homes have drainage that interacts with the water table. During wet periods, low-lying drains can back up even when the sewer line is clear, which requires a different approach to a standard blockage.',
    ],
    localHeading: 'What we see in <em>Oak Flats.</em>',
    localBody: [
      'Repeated toilet and drain blockages are the most common reason we are called to Oak Flats. When a drain has been cleared multiple times, it usually means the pipe is cracked and roots are entering through the damage. We use a camera to confirm and then recommend relining or replacement.',
      'Hot water system replacements are also frequent here. The post-war homes often have older electric storage tanks that are ready for upgrading, and many homeowners are switching to more efficient heat pump or gas systems.',
    ],
    localProblems: [
      'Repeated drain blockages from tree roots in cracked earthenware pipes',
      'Toilet blockages that keep returning after clearing',
      'Hot water systems past their expected lifespan',
      'Drainage affected by the lake foreshore water table',
    ],
    focusServices: ['blocked-drains', 'hot-water', 'leak-detection', 'general-maintenance'],
    caseHeading: 'Roots in a drain junction near the <em>Oak Flats foreshore.</em>',
    faqs: [
      ['My toilet in Oak Flats keeps blocking. Is it the sewer line?', 'If the toilet has been cleared multiple times and keeps blocking, the sewer line likely has tree roots entering through a cracked joint. We run a camera to confirm the location and extent, then recommend pipe relining or replacement rather than repeated clearing.'],
      ['What can you do about tree roots in my sewer line?', 'We clear the blockage first, then camera the line to see the condition. If the pipe is cracked, we can reline it with a resin-coated liner that creates a new pipe inside the old one with no joints for roots to enter. This avoids excavation in most cases.'],
      ['Should I upgrade my old electric hot water system in Oak Flats?', 'If the system is over ten years old, upgrading before failure is usually the better choice. Many homeowners here are switching to heat pump or gas systems for better efficiency. We size the replacement to your household.'],
      ['Do you handle drainage issues related to the lake foreshore?', 'Yes. Some homes near the foreshore have drainage affected by the water table during wet periods. We assess whether the issue is a blockage, a stormwater problem or water table related, and recommend the right approach.'],
    ],
    ctaTitle: 'Need a plumber in Oak Flats?',
    ctaText: 'If your drains keep blocking or your hot water system is struggling, we know the housing stock and the common issues in this area.',
  },

  'shell-cove': {
    slug: 'shell-cove',
    introH2: 'New builds, <em>new connections.</em>',
    introBody: [
      'Shell Cove is the newest development in the Shellharbour area, with architect-designed homes and the marina precinct still growing. The plumbing here is modern PVC, but that does not mean it is problem-free. Ground settlement in the first few years, appliance installations during handover and gas fit-offs for new kitchens are all common reasons we are called.',
      'The marina precinct and the streets around The Waterfront have homes that are being finished to a high standard, and the plumbing needs to match. We work with builders on the handover list, connecting gas cooktops, installing bathroom fixtures and making sure every connection is tested and certified before the owners move in.',
    ],
    localHeading: 'What we see in <em>Shell Cove.</em>',
    localBody: [
      'The most common work in Shell Cove is new home plumbing: gas cooktop fit-offs, bathroom fixture installations, appliance connections and final testing before handover. We also handle drainage issues that arise from ground settlement in the first few years after construction.',
      'Water filter installations and three-way mixer tap installations are popular here too. Many homeowners are choosing filtered water systems and premium tapware for their new kitchens, and we install them cleanly with the correct backflow prevention.',
    ],
    localProblems: [
      'Gas cooktop and appliance connections during new home handover',
      'Bathroom fixture fit-off and final testing for new builds',
      'Drainage issues from ground settlement in the first few years',
      'Water filter and premium tapware installations for new kitchens',
    ],
    focusServices: ['gas-fitting', 'appliance-installations', 'bathroom-renovations', 'tap-fixture-installations'],
    caseHeading: 'A gas cooktop fit-off near <em>The Waterfront.</em>',
    faqs: [
      ['Can you do the gas fit-off for my new Shell Cove home?', 'Yes. We connect gas cooktops, ovens and outdoor BBQ points, pressure test the line and issue the gas compliance certificate. We work with the builder handover list and test every connection before sign-off.'],
      ['My new home has a drainage issue. Is that normal?', 'Some settlement in the first few years can affect drainage, particularly in new estates. If you are experiencing slow drains or water pooling, we can camera the line to check whether the fall has changed or whether there is a construction issue.'],
      ['Can you install a water filter and three-way mixer in my new kitchen?', 'Yes. We install under-sink filtration systems, three-way mixers that combine hot, cold and filtered water, and plumbed-in fridge filters. We fit the correct backflow prevention device as part of every installation.'],
      ['Do you handle the plumbing handover list for builders?', 'Yes. We work with builders on new home handovers, connecting fixtures, testing every fitting and providing the compliance documentation. We coordinate with the builder so the handover happens on schedule.'],
    ],
    ctaTitle: 'Need a plumber in Shell Cove?',
    ctaText: 'From gas fit-offs to fixture installations, we work with new home owners and builders to get the plumbing right from day one.',
  },

  flinders: {
    slug: 'flinders',
    introH2: 'Family homes with <em>room to grow.</em>',
    introBody: [
      'Flinders is a newer residential area with larger family homes and carefully finished interiors. The plumbing here is modern, but the homes are at the age where the first round of maintenance is starting. Flexi hoses are reaching the end of their early life, hot water systems are coming up for their first service, and families are starting to add ensuites and upgrade kitchens.',
      'The green corridors and growing streets around Shell Cove Road have homes with larger floor plans, which often means more bathrooms, more appliances and more complex pipework. When something goes wrong, it can affect more of the house, so we take care to diagnose thoroughly.',
    ],
    localHeading: 'What we see in <em>Flinders.</em>',
    localBody: [
      'The most common calls from Flinders are for ensuite additions, kitchen upgrades, appliance installations and the first round of flexi hose replacements. Many homes here are five to ten years old, which is exactly when the first maintenance items start appearing.',
      'Gas fitting is also common. Many Flinders homes were built with gas connections but are now adding or upgrading gas appliances, or running new lines to outdoor kitchens and BBQ areas.',
    ],
    localProblems: [
      'Flexi hoses reaching the end of their early service life',
      'Ensuite and second bathroom additions for growing families',
      'Kitchen upgrades with new tapware and appliance connections',
      'Gas line extensions for outdoor kitchens and BBQ points',
    ],
    focusServices: ['renovation-plumbing', 'gas-fitting', 'bathroom-renovations', 'appliance-installations'],
    caseHeading: 'An ensuite addition in a <em>Flinders family home.</em>',
    faqs: [
      ['How often should flexi hoses be replaced in a Flinders home?', 'Flexi hoses should be replaced every 5 to 10 years. If your home is around that age and the hoses have never been replaced, now is the time. We replace them with rated hoses and fit isolation valves at the same time.'],
      ['Can you add an ensuite to my Flinders home?', 'Yes. We handle the rough-in for ensuite additions, including waste, hot and cold water lines. We plan the new connections around the existing slab and coordinate with the renovation team for the fit-off.'],
      ['Can you run a gas line to an outdoor kitchen in Flinders?', 'Yes. We run properly sized gas lines to outdoor BBQ points and kitchens, fit the correct hose and regulator, pressure test the line and issue the compliance certificate. We make sure the line is rated for outdoor use.'],
      ['My Flinders home is about ten years old. What maintenance should I do?', 'A maintenance check at this age should include flexi hose replacement, water pressure testing, hot water system service and a drain camera check. We can do all of this in a single visit and flag anything that needs attention.'],
    ],
    ctaTitle: 'Need a plumber in Flinders?',
    ctaText: 'From ensuite additions to flexi hose replacements, we help Flinders families maintain and upgrade their homes.',
  },

  'port-kembla': {
    slug: 'port-kembla',
    introH2: 'Industrial-era homes, <em>practical plumbing.</em>',
    introBody: [
      'Port Kembla has some of the most practical, hardworking homes in the Illawarra. The older cottages near Wentworth Street and the harbour streets below the escarpment were built for a different era, and their plumbing reflects that. Many still have original galvanised supply lines and clay sewer pipes that are well past their designed lifespan.',
      'The industrial heritage of the area means some homes have plumbing that was installed to a different standard, and subsequent renovations and additions have often added layers of pipework that need to be untangled. We take the time to understand what is there before we start changing things.',
    ],
    localHeading: 'What we see in <em>Port Kembla.</em>',
    localBody: [
      'The most common calls from Port Kembla are about ageing pipework that needs replacing, burst pipes in older copper and galvanised lines, and blocked drains in original clay sewers. The homes here are practical and the plumbing needs to be too.',
      'We also do a lot of general maintenance and small repairs in Port Kembla. Many homeowners here are maintaining older homes and need a plumber who can work through a list of small jobs efficiently rather than doing one large project at a time.',
    ],
    localProblems: [
      'Original galvanised supply lines that are narrowed and corroded',
      'Burst pipes in older copper and galvanised pipework',
      'Blocked drains in original clay or earthenware sewer lines',
      'A build-up of small repairs that needs working through',
    ],
    focusServices: ['pipe-repairs', 'leak-detection', 'blocked-drains', 'general-maintenance'],
    caseHeading: 'A burst laundry pipe behind cabinetry near <em>Wentworth Street.</em>',
    faqs: [
      ['My Port Kembla home has old galvanised pipes. What should I do?', 'Galvanised supply lines narrow with internal build-up over decades, leading to low pressure, brown water and frequent leaks. If you are experiencing these issues, replacement is usually the right call. We can inspect and show you the condition before recommending anything.'],
      ['I have a list of small plumbing jobs. Can you do them all at once?', 'Yes. Grouping small jobs into one visit is more cost-effective than separate call-outs. Bring us every small plumbing job and we will work through the list efficiently, then do a preventative check while we are there.'],
      ['Why do my drains keep blocking in my Port Kembla home?', 'If the home has original clay or earthenware sewer lines, they are likely cracked and tree roots are entering through the joints. A camera inspection confirms the condition and we can recommend pipe relining or replacement rather than repeated clearing.'],
      ['Can you handle a burst pipe emergency in Port Kembla?', 'Yes. We provide 24/7 emergency plumbing and Port Kembla is within our coverage area. If a pipe has burst, turn off the water at the meter and call us. We will talk you through the immediate steps while a plumber is on the way.'],
    ],
    ctaTitle: 'Need a plumber in Port Kembla?',
    ctaText: 'From ageing pipework to a list of small repairs, we know the homes and the plumbing challenges in this area.',
  },
};
