// src/components/AccordionSection.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const AccordionSection = () => (
  <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-4xl mx-auto">
      <Accordion defaultValue="item-1" type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">SSB Septic Services provides comprehensive septic system solutions throughout the Kent and Seattle area, including:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Septic Tank Pumping:</strong> Regular maintenance pumping to prevent backups and system failure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">System Inspections:</strong> Thorough evaluations to identify potential issues before they become costly problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Emergency Repairs:</strong> 24/7 emergency service for urgent septic system failures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">New Installations:</strong> Complete septic system design and installation for new construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Drain Field Services:</strong> Repair and restoration of leach fields and drain fields</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Grease Trap Maintenance:</strong> Commercial grease trap cleaning and maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Dump Truck Services:</strong> Additional hauling and transportation services</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            How often should my septic system be inspected?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">It's recommended to have your septic system inspected at least once every three years by a licensed professional. However, the frequency may vary based on several factors:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Household size:</strong> Larger families may need more frequent inspections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">System age:</strong> Older systems require more regular monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Usage patterns:</strong> Heavy water usage or harsh chemicals can accelerate wear</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Local regulations:</strong> Some areas require annual inspections</span>
              </li>
            </ul>
            <p className="leading-relaxed">Regular inspections help prevent costly emergency repairs and ensure your system operates efficiently while protecting the environment.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            What is a septic system?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">If your home is in a rural location, a small community, or if you own a cottage, it's likely that your property utilizes a septic system or holding tank. These systems serve as localized treatment facilities for areas where municipal sewer systems aren't available, handling everything that's washed down drains—from shower water to toilet flushes.</p>
            <p className="mb-4 leading-relaxed">A typical septic system consists of several key components:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Septic Tank:</strong> A large underground chamber that holds and partially treats wastewater</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Distribution Box:</strong> Distributes effluent evenly to the drain field</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Drain Field (Leach Field):</strong> Network of perforated pipes that filter treated water back into the soil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Soil:</strong> Provides final filtration and treatment of wastewater</span>
              </li>
            </ul>
            <p className="leading-relaxed">The system works with countless beneficial microorganisms to break down waste naturally, making it an environmentally-friendly waste treatment solution when properly maintained.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            How often should I pump my septic tank?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">Most residential septic tanks should be pumped every 3-5 years, but this can vary significantly based on usage and tank size:</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <span className="block text-2xl font-bold text-primary">4-5</span>
                <span className="text-sm text-slate-500">years for 1-2 people</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <span className="block text-2xl font-bold text-primary">3-4</span>
                <span className="text-sm text-slate-500">years for 3-4 people</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <span className="block text-2xl font-bold text-primary">2-3</span>
                <span className="text-sm text-slate-500">years for 5-6 people</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <span className="block text-2xl font-bold text-primary">1-2</span>
                <span className="text-sm text-slate-500">years for 7+ people</span>
              </div>
            </div>
            <p className="mb-3 font-medium text-slate-800">Signs you need pumping sooner include:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>Slow draining fixtures</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>Gurgling sounds in plumbing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>Sewage odors around the tank area</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>Standing water or wet spots over the drain field</span>
              </li>
            </ul>
            <p className="leading-relaxed">Regular pumping prevents system backups and extends the life of your septic system significantly.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            What are signs my septic system needs attention?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">Watch for these warning signs that indicate your septic system may need professional attention:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Slow drainage:</strong> Sinks, tubs, and toilets drain slowly or back up frequently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Unpleasant odors:</strong> Sewage smells around the tank, drain field, or inside your home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Pooling water:</strong> Standing water or unusually lush grass over the drain field</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Gurgling sounds:</strong> Strange noises from plumbing fixtures when water drains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Sewage backup:</strong> Raw sewage backing up into sinks, tubs, or toilets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">High nitrate levels:</strong> Contaminated well water if you have a private well nearby</span>
              </li>
            </ul>
            <p className="leading-relaxed">Don't ignore these signs - early intervention can save you thousands of dollars in emergency repairs and prevent environmental contamination.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            Do you offer emergency services?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-4">
              <p className="font-semibold text-accent flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Emergency Service Available
              </p>
            </div>
            <p className="mb-4 leading-relaxed">Yes! SSB Septic Services provides 24/7 emergency septic services throughout the Kent and Seattle area. Septic emergencies don't wait for business hours, and neither do we.</p>
            <p className="mb-3 font-medium text-slate-800">Our emergency services include:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span>Emergency pumping for overflowing tanks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span>Immediate repair of broken pipes or system failures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span>Backup sewage cleanup and sanitization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span>Drain field emergency repairs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span>System diagnostics and temporary solutions</span>
              </li>
            </ul>
            <p className="leading-relaxed">Call us immediately at <a href="tel:+12068338777" className="font-semibold text-primary hover:text-accent transition-colors">(206) 833-8777</a> if you're experiencing sewage backups, strong odors, or other urgent septic issues. Our experienced technicians are on call and ready to help restore your system quickly and safely.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            What areas do you service?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">SSB Septic Services proudly serves residential and commercial customers throughout the greater Seattle metropolitan area. Our primary service areas include:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {['Kent', 'Seattle', 'Covington', 'Renton', 'Federal Way', 'Auburn', 'Tukwila', 'Des Moines', 'Normandy Park', 'Burien', 'Snohomish County'].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg px-3 py-2 text-center text-sm font-medium text-slate-700">
                  {area}
                </div>
              ))}
            </div>
            <p className="leading-relaxed">We also service surrounding areas throughout King County and Snohomish County. If your location isn't listed, please give us a call - we may still be able to help! Our goal is to provide reliable septic services to as many communities as possible while maintaining our high standards of quality and customer service.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="bg-white rounded-2xl shadow-soft border border-slate-100 px-6 overflow-hidden">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 py-5 [&[data-state=open]>svg]:rotate-180">
            Do you offer any additional services?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 pb-5">
            <p className="mb-4 leading-relaxed">Yes! In addition to our comprehensive septic services, SSB also offers professional dump truck services for various hauling and transportation needs.</p>
            <p className="mb-3 font-medium text-slate-800">Our additional services include:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Construction waste removal:</strong> Efficient disposal of construction debris and materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Soil and gravel delivery:</strong> Transportation of aggregate materials for landscaping and construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Residential hauling:</strong> Large item removal and cleanup services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span><strong className="text-slate-800">Commercial waste management:</strong> Specialized hauling for businesses and contractors</span>
              </li>
            </ul>
            <p className="leading-relaxed">Please contact us by phone at <a href="tel:+12068338777" className="font-semibold text-primary hover:text-accent transition-colors">(206) 833-8777</a> to inquire about additional services and pricing. Our versatile fleet and experienced operators can handle a wide variety of hauling and transportation challenges.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);
