//React
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

//Styles & AOS animation
import { ParagraphTop, Paragraphs } from "../../styles/Index.styles";

//Images
import iconLess from "../../../public/images/icon-less.svg";

const AccordionFaqsBox = () => {
  return (
    <Accordion preExpanded="0">
      <AccordionItem className="accordion-item">
        <AccordionItemHeading className="accordion-title">
          <AccordionItemButton className="accordion-title-inner">
            <ParagraphTop>
              <span>
                ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </span>
            </ParagraphTop>
            <div className="icon">
              <img src={iconLess} title="icon" alt="icon" />
              <img
                className="icon-by-plus"
                src={iconLess}
                title="icon"
                alt="icon"
              />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="tabs-body">
          <Paragraphs>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            magna et dolor finibus tempor et nec ante. Sed vel posuere magna, eu
            condimentum orci. Etiam vel mauris quis nisi venenatis tincidunt at
            id est. Sed pretium, velit a blandit tempor, sapien ex scelerisque
            justo, nec commodo metus sapien non purus. Pellentesque et
            vestibulum magna. Etiam convallis sollicitudin sem egestas
            hendrerit. Maecenas ligula ipsum, dignissim id nulla ac, tempus
            pretium diam. Morbi eget posuere purus. Sed nec eros lacinia, varius
            nibh ut, luctus dui. In hac habitasse platea dictumst. Nulla non
            facilisis ipsum, ac varius ex. Aenean sagittis commodo accumsan.
            Nulla ornare est orci, in luctus quam faucibus vitae. Cras non
            luctus lectus.
          </Paragraphs>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-item">
        <AccordionItemHeading className="accordion-title">
          <AccordionItemButton className="accordion-title-inner">
            <ParagraphTop>
              <span>¿Nullam et mattis mi, at condimentum nibh?</span>
            </ParagraphTop>
            <div className="icon">
              <img src={iconLess} title="icon" alt="icon" />
              <img
                className="icon-by-plus"
                src={iconLess}
                title="icon"
                alt="icon"
              />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="tabs-body">
          <Paragraphs>
            Nullam et mattis mi, at condimentum nibh. Curabitur luctus magna
            eget orci varius fringilla. Praesent iaculis sagittis iaculis. Sed
            congue libero vel velit tristique molestie. Maecenas eget velit
            porta, dictum arcu quis, mollis lorem. Sed a risus aliquet velit
            tincidunt venenatis. Ut aliquet hendrerit quam, sed feugiat massa
            iaculis eget. Aliquam a bibendum lorem, ut sollicitudin dui. Cras in
            tempor ex. Nam ultricies vestibulum mi, rhoncus maximus tortor
            suscipit eu. Ut vitae purus pulvinar, varius eros et, scelerisque
            elit. Nunc et erat sed nulla elementum consequat a vel erat. Aliquam
            erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Paragraphs>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-item">
        <AccordionItemHeading className="accordion-title">
          <AccordionItemButton className="accordion-title-inner">
            <ParagraphTop>
              <span>¿Proin in ornare eros, at porttitor magna?</span>
            </ParagraphTop>
            <div className="icon">
              <img src={iconLess} title="icon" alt="icon" />
              <img
                className="icon-by-plus"
                src={iconLess}
                title="icon"
                alt="icon"
              />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="tabs-body">
          <Paragraphs>
            Proin in ornare eros, at porttitor magna. Pellentesque bibendum
            tempus euismod. Etiam interdum volutpat massa, at luctus massa.
            Mauris arcu lectus, pellentesque quis auctor id, maximus id orci. Ut
            commodo ex ornare laoreet tristique. Donec hendrerit sollicitudin
            faucibus. Donec nec felis eu nisi imperdiet varius eu nec neque.
            Nullam luctus laoreet est, sit amet viverra magna dapibus sed.
            Mauris blandit ultricies consectetur. Pellentesque posuere vehicula
            enim vitae interdum. Integer non ante eu nisi luctus dictum ut at
            turpis. Nam elit orci, sodales a enim in, placerat posuere nisi.
            Quisque vitae lorem nec augue mollis placerat. Etiam malesuada sit
            amet nisi in varius. Quisque in dolor in turpis egestas sollicitudin
            eu in lectus. Aenean elementum, lorem id consequat venenatis, nulla
            risus lobortis ante, non imperdiet purus libero ut purus.
          </Paragraphs>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-item">
        <AccordionItemHeading className="accordion-title">
          <AccordionItemButton className="accordion-title-inner">
            <ParagraphTop>
              <span>¿Aenean sollicitudin arcu et erat facilisis semper?</span>
            </ParagraphTop>
            <div className="icon">
              <img src={iconLess} title="icon" alt="icon" />
              <img
                className="icon-by-plus"
                src={iconLess}
                title="icon"
                alt="icon"
              />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="tabs-body">
          <Paragraphs>
            Aenean sollicitudin arcu et erat facilisis semper. Fusce sodales,
            metus in lobortis venenatis, leo lacus suscipit mi, at lacinia dolor
            ex sit amet ante. Cras finibus vestibulum sem, vitae blandit eros
            ornare imperdiet. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. In suscipit accumsan metus dapibus viverra. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Quisque pulvinar in metus non facilisis. Duis vehicula,
            sapien eu tincidunt pellentesque, ex leo tincidunt ligula, vitae
            mollis nulla lectus eget neque. Phasellus sit amet nisl varius,
            viverra erat non, aliquet diam. Nullam eleifend augue vel est
            egestas ultricies. Sed nulla urna, eleifend sed arcu sollicitudin,
            venenatis efficitur lorem. Integer orci orci, cursus vel mauris nec,
            volutpat consequat elit.
          </Paragraphs>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-item">
        <AccordionItemHeading className="accordion-title">
          <AccordionItemButton className="accordion-title-inner">
            <ParagraphTop>
              <span>¿Nam fringilla nec libero nec ullamcorper?</span>
            </ParagraphTop>
            <div className="icon">
              <img src={iconLess} title="icon" alt="icon" />
              <img
                className="icon-by-plus"
                src={iconLess}
                title="icon"
                alt="icon"
              />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="tabs-body">
          <Paragraphs>
            Nam fringilla nec libero nec ullamcorper. Donec viverra congue
            egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque sodales nibh metus, eget vulputate enim tristique nec. Nunc
            consequat augue ut nibh vulputate ornare ut sed tortor. Proin
            commodo consectetur tellus, gravida hendrerit tellus ultrices ut.
            Nam interdum lectus vel dui dapibus, sed eleifend quam ultrices.
            Fusce nec turpis sollicitudin, vulputate sapien non, ultrices massa.
            Aenean placerat tempor magna, sed blandit elit hendrerit non.
          </Paragraphs>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionFaqsBox;
