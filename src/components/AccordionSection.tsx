// src/components/AccordionSection.jsx
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'; // Adjust the import path as needed

export const AccordionSection = () => (
  <section className="p-8 bg-gray-100">
    <Accordion defaultValue="item-1" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What services do you offer?</AccordionTrigger>
        <AccordionContent>
          We provide comprehensive septic services including installation, maintenance, and repair.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How often should my septic system be inspected?</AccordionTrigger>
        <AccordionContent>
          It's recommended to have your septic system inspected at least once every three years.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is a septic system?</AccordionTrigger>
        <AccordionContent>
        If your home is in a rural location, a small community, or if you own a cottage, it's likely that your property utilizes a septic system or holding tank. 
        These systems serve as localized treatment facilities for areas where municipal sewer systems aren't available, handling everything that's washed down drains—from shower water to toilet flushes. 
        A septic system consists of a tank and a series of pipes, working with countless microorganisms to treat your waste.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer any additional services?</AccordionTrigger>
        <AccordionContent>
          Yes! We also offer dump truck services please contact us by phone to inquire additional information.
        </AccordionContent>
      </AccordionItem>
      {/* Add more AccordionItems here as needed */}
    </Accordion>
  </section>
);
