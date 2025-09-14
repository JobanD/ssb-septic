// src/components/AccordionSection.jsx
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'; // Adjust the import path as needed

export const AccordionSection = () => (
  <section className="p-8 bg-gray-100">
    <Accordion defaultValue="item-1" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do you offer?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">SSB Septic Services provides comprehensive septic system solutions throughout the Kent and Seattle area, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Septic Tank Pumping:</strong> Regular maintenance pumping to prevent backups and system failure</li>
            <li><strong>System Inspections:</strong> Thorough evaluations to identify potential issues before they become costly problems</li>
            <li><strong>Emergency Repairs:</strong> 24/7 emergency service for urgent septic system failures</li>
            <li><strong>New Installations:</strong> Complete septic system design and installation for new construction</li>
            <li><strong>Drain Field Services:</strong> Repair and restoration of leach fields and drain fields</li>
            <li><strong>Grease Trap Maintenance:</strong> Commercial grease trap cleaning and maintenance</li>
            <li><strong>Dump Truck Services:</strong> Additional hauling and transportation services</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How often should my septic system be inspected?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">It's recommended to have your septic system inspected at least once every three years by a licensed professional. However, the frequency may vary based on several factors:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>Household size:</strong> Larger families may need more frequent inspections</li>
            <li><strong>System age:</strong> Older systems require more regular monitoring</li>
            <li><strong>Usage patterns:</strong> Heavy water usage or harsh chemicals can accelerate wear</li>
            <li><strong>Local regulations:</strong> Some areas require annual inspections</li>
          </ul>
          <p>Regular inspections help prevent costly emergency repairs and ensure your system operates efficiently while protecting the environment.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is a septic system?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">If your home is in a rural location, a small community, or if you own a cottage, it's likely that your property utilizes a septic system or holding tank. These systems serve as localized treatment facilities for areas where municipal sewer systems aren't available, handling everything that's washed down drains—from shower water to toilet flushes.</p>
          <p className="mb-3">A typical septic system consists of several key components:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>Septic Tank:</strong> A large underground chamber that holds and partially treats wastewater</li>
            <li><strong>Distribution Box:</strong> Distributes effluent evenly to the drain field</li>
            <li><strong>Drain Field (Leach Field):</strong> Network of perforated pipes that filter treated water back into the soil</li>
            <li><strong>Soil:</strong> Provides final filtration and treatment of wastewater</li>
          </ul>
          <p>The system works with countless beneficial microorganisms to break down waste naturally, making it an environmentally-friendly waste treatment solution when properly maintained.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How often should I pump my septic tank?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">Most residential septic tanks should be pumped every 3-5 years, but this can vary significantly based on usage and tank size:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>1-2 people:</strong> Every 4-5 years</li>
            <li><strong>3-4 people:</strong> Every 3-4 years</li>
            <li><strong>5-6 people:</strong> Every 2-3 years</li>
            <li><strong>7+ people:</strong> Every 1-2 years</li>
          </ul>
          <p className="mb-3">Signs you need pumping sooner include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Slow draining fixtures</li>
            <li>Gurgling sounds in plumbing</li>
            <li>Sewage odors around the tank area</li>
            <li>Standing water or wet spots over the drain field</li>
          </ul>
          <p>Regular pumping prevents system backups and extends the life of your septic system significantly.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What are signs my septic system needs attention?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">Watch for these warning signs that indicate your septic system may need professional attention:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>Slow drainage:</strong> Sinks, tubs, and toilets drain slowly or back up frequently</li>
            <li><strong>Unpleasant odors:</strong> Sewage smells around the tank, drain field, or inside your home</li>
            <li><strong>Pooling water:</strong> Standing water or unusually lush grass over the drain field</li>
            <li><strong>Gurgling sounds:</strong> Strange noises from plumbing fixtures when water drains</li>
            <li><strong>Sewage backup:</strong> Raw sewage backing up into sinks, tubs, or toilets</li>
            <li><strong>High nitrate levels:</strong> Contaminated well water if you have a private well nearby</li>
          </ul>
          <p>Don't ignore these signs - early intervention can save you thousands of dollars in emergency repairs and prevent environmental contamination.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Do you offer emergency services?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">Yes! SSB Septic Services provides 24/7 emergency septic services throughout the Kent and Seattle area. Septic emergencies don't wait for business hours, and neither do we.</p>
          <p className="mb-3">Our emergency services include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Emergency pumping for overflowing tanks</li>
            <li>Immediate repair of broken pipes or system failures</li>
            <li>Backup sewage cleanup and sanitization</li>
            <li>Drain field emergency repairs</li>
            <li>System diagnostics and temporary solutions</li>
          </ul>
          <p>Call us immediately at (206) 833-8777 if you're experiencing sewage backups, strong odors, or other urgent septic issues. Our experienced technicians are on call and ready to help restore your system quickly and safely.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>What areas do you service?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">SSB Septic Services proudly serves residential and commercial customers throughout the greater Seattle metropolitan area. Our primary service areas include:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Kent</li>
            <li>Seattle</li>
            <li>Covington</li>
            <li>Renton</li>
            <li>Federal Way</li>
            <li>Auburn</li>
            <li>Tukwila</li>
            <li>Des Moines</li>
            <li>Normandy Park</li>
            <li>Burien</li>
          </ul>
          <p>We also service surrounding areas throughout King County. If your location isn't listed, please give us a call - we may still be able to help! Our goal is to provide reliable septic services to as many communities as possible while maintaining our high standards of quality and customer service.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>Do you offer any additional services?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-3">Yes! In addition to our comprehensive septic services, SSB also offers professional dump truck services for various hauling and transportation needs.</p>
          <p className="mb-3">Our additional services include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li><strong>Construction waste removal:</strong> Efficient disposal of construction debris and materials</li>
            <li><strong>Soil and gravel delivery:</strong> Transportation of aggregate materials for landscaping and construction</li>
            <li><strong>Residential hauling:</strong> Large item removal and cleanup services</li>
            <li><strong>Commercial waste management:</strong> Specialized hauling for businesses and contractors</li>
          </ul>
          <p>Please contact us by phone at (206) 833-8777 to inquire about additional services and pricing. Our versatile fleet and experienced operators can handle a wide variety of hauling and transportation challenges.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);
