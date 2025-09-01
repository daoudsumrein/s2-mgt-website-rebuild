import { Link } from "react-router-dom";
import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const solutions = [{
  name: "All Services",
  href: "/services"
}, {
  name: "Disaster Recovery",
  href: "/solutions/opentext-carbonite-availability"
}, {
  name: "Data Protection",
  href: "/solutions/data-protection"
}, {
  name: "Application Modernization",
  href: "/solutions/app-modernization"
}, {
  name: "IT Discovery",
  href: "/solutions/it-discovery"
}, {
  name: "Secure Cloud",
  href: "/solutions/secure-cloud"
}, {
  name: "Security",
  href: "/solutions/security"
}];
const vendors = [{
  name: "OpenText",
  href: "/vendors/opentext"
}, {
  name: "TDS",
  href: "/vendors/tds"
}, {
  name: "AppCURE",
  href: "/vendors/appcure"
}, {
  name: "Arrosoft",
  href: "/vendors/arrosoft"
}, {
  name: "Nakivo",
  href: "/vendors/nakivo"
}];
export default function Footer() {
  const {
    ref: footerRef,
    isInView: footerInView
  } = useScrollAnimation();
  return <motion.footer ref={footerRef} initial={{
    opacity: 0,
    y: 30
  }} animate={footerInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.6
  }} className="bg-muted border-t">
      <div className="container mx-auto px-5 pt-10 pb-4">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {/* Contact Information Mobile */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">📞 Contact Information</div>
            
            {/* UAE Office */}
            <div className="pb-4 border-b border-border">
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path>
                  <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
                  <path fill="#fff" d="M10 11H31V21H10z"></path>
                  <path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                United Arab Emirates Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">📍</span>
                  <span>Office 101, Building 10, Dubai Internet City, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+97144342221" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 4 434 2221
                  </a>
                </div>
              </div>
            </div>
            
            {/* Saudi Arabia Office */}
            <div>
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#215230"></rect>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                  <path d="M25.47,15.008c.105-.506-.616-3.171-.092-2.76,.071-.184-.288-.624-.39-.863-.362,1.107,.47,3.281,.2,4.749-.205,.431-1.607,.948-1.937,1.134,.74,.218,2.5-.651,2.218-2.26Z" fill="#fff"></path>
                  <path d="M10.505,16.004c.189-.342,.23-.711,.203-1.119,.285-.116,.625-.309,.739-.323-.078,.268,.108,.557,.485,.52,.075,2.143,.346,1.695,.235-.061,.244-.113,.285-.331,.376-.424,.529,.867,1.302-.28,.818-.752-.005,.039-.118,.415-.118,.415,0,0,.108,.114,.113,.17-.117,.14-.654,.045-.621-.172,.026-.059,.152-.363-.028-.182-.163,.166-.247,.518-.574,.578,.021-.738-.397-2.077-.198-2.519,.186,.233,.189,.069,.075-.16-.189-.337-.287-.981-.469-.283,.189,.786,.217,2.078,.349,2.962-.361-.07-.248-.325-.244-.489-.049-.033-.698,.313-.968,.396-.032-.274-.072-.521-.089-.724,1.012-.097,.623-1.314,.414-1.883,.025-.034,.297,.197,.133-.076-.251-.317-.358-.681-.477-.079,.157,.294,.301,1.089,.451,1.42-.103,.073-.337,.195-.569,.188,.019-.348-.281-1.172-.047-1.233,.161,.185,.185,.105,.072-.126-.195-.297-.349-1.048-.488-.321,.167,.343,.096,.842,.207,1.609-.632-.338-.133-1.385-.652-1.885-.024,.057-.13,.41-.13,.41,.515,.73-.338,2.343-1.17,1.331-.098-.544,.476-2.27-.336-.957-.16,.529-.555,2.134-1.013,.927-.089-.336,.098-1.28-.115-.503-.119,.293,.045,1.443,.567,1.308,.471-.253,.488-1.453,.854-1.754-.724,1.53,.977,2.599,1.429,.747,.013,.287,.224,.749,.612,.848,.023,.228,.06,.525,.094,.838-.072,.022-.144,.042-.217,.059-.605-1.576-2.019,.892-.179,.401,.024,.072,.04,.143,.042,.207-.852,1.187-3.966,1.185-1.934-.889,.066,.024,.191,.147,.18,.158,.073-.112,.11-.232-.09-.308,.33-.876-.875-.159-.14,.119-.149,.156-.5,.385-.715,.519-.167,.094-.68,.407-.803,.479-.057,.104,.455-.213,.61-.266-1.488,2.836,2.314,2.381,3.326,.88Zm-3.208-.938c.106-.053,.207-.104,.29-.15-1.363,2.364,2.618,1.812,2.664,.131,.069-.021,.138-.044,.208-.068,.024,.255,.041,.505,.042,.723-.365,.429-1.203,.928-1.945,1.131-1.368,.433-1.852-.966-1.259-1.766Z" fill="#fff"></path>
                  <path d="M16.342,16.611c.242-.267,1.915-.721,2.199-.864,.025-.071,.148-.321,.156-.373-.557,.05-2.089,.134-2.7,.103,.126-.108,.736-.422,1.182-.554,.042,.074,.073,.148,.079,.212,.032-.033,.056-.142,.048-.253,.293-.093,.443-.124,.508-.142,.041-.053,.114-.268,.125-.425-.359-.659-1.502-.446-.957,.322-.457,.192-1.222,.541-1.44,.856l-.035,.017c-.009,.017-.069,.266-.089,.343-.262-.782-.341-1.798-.795-2.093-.247,.506,.507,1.512,.517,2.056-.142,.33-1.991,1.757-2.309,.939,1.134-.431,2.304-1.185,1.336-2.289-.01-.041,.115,.017,.188,.02,.053-.113-.348-.347-.448-.46-.089-.016-.103,.303-.102,.38,.123,.179,.492,.887,.586,1.102-.139,.177-.837,.553-1.518,.863,.005-.176,.414-.656,.299-.786-.283,.515-.322-.323-.122-.485,.201-.642-.663,.951-.09,.897-.06,.114-.134,.253-.187,.419-.792,.369-2,.72-2.528,.893,.029-.094,.025-.174-.006-.15-.542,.637-.017-.81-.096-.67-.302,.23-.48,1.59,.087,.861,.44-.099,1.918-.203,2.471-.534,.084,1.499,2.627-.297,2.513-1.062,.064,.906,.55,1.539,1.847,1.609,.003-.103-.038-.425-.038-.425-.164-.023-.579-.086-.68-.326Zm-.913-.73c.257,.005,1.655-.032,1.921-.04-.491,.171-1.171,.271-1.14,.96-.403-.091-.624-.464-.781-.92Z" fill="#fff"></path>
                  <path d="M12.822,13.817c.459-.246,.482-1.398,.854-1.685-.765,1.473,1.05,2.445,1.404,.667,.322,1.701,2.18,.64,1.302-.691-.241-.549,.228,.023,.066-.334-.251-.316-.358-.681-.477-.079,.16,.291,.317,1.085,.451,1.42-1.359,.72-.927-1.166-1.428-1.825-.024,.057-.13,.41-.13,.41,.838,1.883-1.884,2.344-.998,.137-.447-.722-.639,1.657-1.145,1.614-.411,0-.413-.913-.358-1.107-.292,.019-.146,1.653,.458,1.473Z" fill="#fff"></path>
                  <path d="M23.777,14.233c.057,.949,.148,1.852,.117,2.524,.349-.356,.155-1.494,.145-2.223,.438,.519,.919,1.113,1.024,1.678,.013,.036,.069-.11,.06-.338,.048-.4-.665-1.312-1.115-1.788,.058-.461-.361-1.665-.114-1.934,.161,.186,.185,.105,.072-.126-.194-.304-.337-1.009-.476-.298,.17,.367,.134,1.245,.25,2.057-.385-.43-.627-.687-.828-.906,.011-.189-.181-.792,.017-.716,.161,.185,.185,.105,.072-.127-.205-.324-.348-1.024-.491-.286,.133,.193,.073,.417,.129,.814-.3-.442-.684-.627-.168-.578-.212-.149-1.029-.919-.813-.171,.305,.143,.63,.818,1.022,1.192,.063,.847,.258,2.221,.288,3.015-.809,.711-.96,.011-1.425-.246,.002-.225-.005-.444-.005-.573,.11-.505-.579-3.324-.041-2.908-.042-.23-.467-1.414-.568-.555,.225,.773,.255,2.393,.371,3.462,.011,.101,.024,.291,.035,.497-.002,0-.003-.001-.004-.002-.664,.19-.965,2.265-1.701,1.066,1.334-1.002,.41-3.321,.327-4.613,.008-.082,.139,.112,.207,.126,.049-.187-.281-.67-.399-.912-.476,.972,.751,3.11,.284,4.421,.061-.629-.685-1.392-1.221-1.883,.048-.267-.519-2.128-.024-1.609,.045-.023-.005-.16-.067-.282-.198-.331-.312-.975-.476-.273,.137,.173,.197,1.62,.287,1.904-.317-.37-1.855-1.462-1.123-1.362-.006-.02-.038-.068-.119-.117-.276-.09-.873-.788-.694-.054,.038,.003,.106,.049,.155,.107,.379,.518,1.263,1.37,1.843,1.886,.221,2.776,.599,3.546,.278,.267,.461,.469,.995,.976,1.103,1.565-.097,.201-.238,.38-.445,.525-.058-.379,.005-.686-.05-.715-.115,.07-.081,.556-.059,.79-1.629,.876-1.893,1.088,.063,.311,.679,1.706,1.129-.408,1.804-.783,.018,.016,.033,.025,.051,.04,.007,.215,.008,.399-.001,.459,.09-.001,.139-.14,.165-.33,1.967,1.537,1.697-1.371,1.455-2.888,.33,.384,.542,.608,.806,.888Z" fill="#fff"></path>
                  <path d="M22.159,20.66h0s-1.5,0-1.5,0c.115-.083,.176-.205,.159-.327-.01-.077-.087-.135-.181-.143h-.047c-.114,.011-.196,.093-.184,.183l.005,.035,.006,.053c.006,.067,0,.134-.019,.199H9.313c.165,.24,.465,.386,.789,.386l10.116-.006c-.116,.083-.176,.205-.16,.328,.012,.09,.114,.154,.227,.143,.114-.011,.196-.093,.184-.183l-.005-.035-.006-.053c-.006-.067,0-.134,.019-.2h1.248s.035,.058,.035,.058c.031,.053,.071,.1,.117,.142l.064,.053h0c.126,.088,.287,.14,.456,.14,.16,0,.289-.111,.289-.248v-.072c0-.25-.237-.453-.529-.453Z" fill="#fff"></path>
                </svg>
                Saudi Arabia Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">📍</span>
                  <span>Building No. 7036, Saiyda st., Riyadh Saudi Arabia | P.O. Box: 12796, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+966550846532" className="text-muted-foreground hover:text-primary transition-colors">
                    +966 550846532
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <div className="space-y-4">
            {/* Solutions & Services Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Solutions & Services
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {solutions.map(solution => <div key={solution.href}>
                    <Link to={solution.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {solution.name}
                    </Link>
                  </div>)}
              </CollapsibleContent>
            </Collapsible>

            {/* Vendors Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Our Vendors
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {vendors.map(vendor => <div key={vendor.href}>
                    <Link to={vendor.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {vendor.name}
                    </Link>
                  </div>)}
              </CollapsibleContent>
            </Collapsible>

            {/* Company & Partners Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-semibold text-left">
                Company
                <span className="text-sm">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 pt-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  About S2
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Contact Us
                </Link>
                <a href="https://odoo.s2mgt.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                  Employee Login
                </a>
                
                <div>
                  <div className="font-semibold text-sm text-foreground mb-2">Partners</div>
                  <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Partner Portal 
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8">
          {/* Contact Information Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">📞 Contact Information</div>
            
            {/* UAE Office */}
            <div className="pb-4 mb-5 border-b border-border">
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path>
                  <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
                  <path fill="#fff" d="M10 11H31V21H10z"></path>
                  <path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                United Arab Emirates Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>Office 101, Building 10, Dubai Internet City, UAE</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+97144342221" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 4 434 2221
                  </a>
                </div>
              </div>
            </div>
            
            {/* Saudi Arabia Office */}
            <div>
              <div className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="flex-shrink-0">
                  <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#215230"></rect>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                  <path d="M25.47,15.008c.105-.506-.616-3.171-.092-2.76,.071-.184-.288-.624-.39-.863-.362,1.107,.47,3.281,.2,4.749-.205,.431-1.607,.948-1.937,1.134,.74,.218,2.5-.651,2.218-2.26Z" fill="#fff"></path>
                  <path d="M10.505,16.004c.189-.342,.23-.711,.203-1.119,.285-.116,.625-.309,.739-.323-.078,.268,.108,.557,.485,.52,.075,2.143,.346,1.695,.235-.061,.244-.113,.285-.331,.376-.424,.529,.867,1.302-.28,.818-.752-.005,.039-.118,.415-.118,.415,0,0,.108,.114,.113,.17-.117,.14-.654,.045-.621-.172,.026-.059,.152-.363-.028-.182-.163,.166-.247,.518-.574,.578,.021-.738-.397-2.077-.198-2.519,.186,.233,.189,.069,.075-.16-.189-.337-.287-.981-.469-.283,.189,.786,.217,2.078,.349,2.962-.361-.07-.248-.325-.244-.489-.049-.033-.698,.313-.968,.396-.032-.274-.072-.521-.089-.724,1.012-.097,.623-1.314,.414-1.883,.025-.034,.297,.197,.133-.076-.251-.317-.358-.681-.477-.079,.157,.294,.301,1.089,.451,1.42-.103,.073-.337,.195-.569,.188,.019-.348-.281-1.172-.047-1.233,.161,.185,.185,.105,.072-.126-.195-.297-.349-1.048-.488-.321,.167,.343,.096,.842,.207,1.609-.632-.338-.133-1.385-.652-1.885-.024,.057-.13,.41-.13,.41,.515,.73-.338,2.343-1.17,1.331-.098-.544,.476-2.27-.336-.957-.16,.529-.555,2.134-1.013,.927-.089-.336,.098-1.28-.115-.503-.119,.293,.045,1.443,.567,1.308,.471-.253,.488-1.453,.854-1.754-.724,1.53,.977,2.599,1.429,.747,.013,.287,.224,.749,.612,.848,.023,.228,.06,.525,.094,.838-.072,.022-.144,.042-.217,.059-.605-1.576-2.019,.892-.179,.401,.024,.072,.04,.143,.042,.207-.852,1.187-3.966,1.185-1.934-.889,.066,.024,.191,.147,.18,.158,.073-.112,.11-.232-.09-.308,.33-.876-.875-.159-.14,.119-.149,.156-.5,.385-.715,.519-.167,.094-.68,.407-.803,.479-.057,.104,.455-.213,.61-.266-1.488,2.836,2.314,2.381,3.326,.88Zm-3.208-.938c.106-.053,.207-.104,.29-.15-1.363,2.364,2.618,1.812,2.664,.131,.069-.021,.138-.044,.208-.068,.024,.255,.041,.505,.042,.723-.365,.429-1.203,.928-1.945,1.131-1.368,.433-1.852-.966-1.259-1.766Z" fill="#fff"></path>
                  <path d="M16.342,16.611c.242-.267,1.915-.721,2.199-.864,.025-.071,.148-.321,.156-.373-.557,.05-2.089,.134-2.7,.103,.126-.108,.736-.422,1.182-.554,.042,.074,.073,.148,.079,.212,.032-.033,.056-.142,.048-.253,.293-.093,.443-.124,.508-.142,.041-.053,.114-.268,.125-.425-.359-.659-1.502-.446-.957,.322-.457,.192-1.222,.541-1.44,.856l-.035,.017c-.009,.017-.069,.266-.089,.343-.262-.782-.341-1.798-.795-2.093-.247,.506,.507,1.512,.517,2.056-.142,.33-1.991,1.757-2.309,.939,1.134-.431,2.304-1.185,1.336-2.289-.01-.041,.115,.017,.188,.02,.053-.113-.348-.347-.448-.46-.089-.016-.103,.303-.102,.38,.123,.179,.492,.887,.586,1.102-.139,.177-.837,.553-1.518,.863,.005-.176,.414-.656,.299-.786-.283,.515-.322-.323-.122-.485,.201-.642-.663,.951-.09,.897-.06,.114-.134,.253-.187,.419-.792,.369-2,.72-2.528,.893,.029-.094,.025-.174-.006-.15-.542,.637-.017-.81-.096-.67-.302,.23-.48,1.59,.087,.861,.44-.099,1.918-.203,2.471-.534,.084,1.499,2.627-.297,2.513-1.062,.064,.906,.55,1.539,1.847,1.609,.003-.103-.038-.425-.038-.425-.164-.023-.579-.086-.68-.326Zm-.913-.73c.257,.005,1.655-.032,1.921-.04-.491,.171-1.171,.271-1.14,.96-.403-.091-.624-.464-.781-.92Z" fill="#fff"></path>
                  <path d="M12.822,13.817c.459-.246,.482-1.398,.854-1.685-.765,1.473,1.05,2.445,1.404,.667,.322,1.701,2.18,.64,1.302-.691-.241-.549,.228,.023,.066-.334-.251-.316-.358-.681-.477-.079,.16,.291,.317,1.085,.451,1.42-1.359,.72-.927-1.166-1.428-1.825-.024,.057-.13,.41-.13,.41,.838,1.883-1.884,2.344-.998,.137-.447-.722-.639,1.657-1.145,1.614-.411,0-.413-.913-.358-1.107-.292,.019-.146,1.653,.458,1.473Z" fill="#fff"></path>
                  <path d="M23.777,14.233c.057,.949,.148,1.852,.117,2.524,.349-.356,.155-1.494,.145-2.223,.438,.519,.919,1.113,1.024,1.678,.013,.036,.069-.11,.06-.338,.048-.4-.665-1.312-1.115-1.788,.058-.461-.361-1.665-.114-1.934,.161,.186,.185,.105,.072-.126-.194-.304-.337-1.009-.476-.298,.17,.367,.134,1.245,.25,2.057-.385-.43-.627-.687-.828-.906,.011-.189-.181-.792,.017-.716,.161,.185,.185,.105,.072-.127-.205-.324-.348-1.024-.491-.286,.133,.193,.073,.417,.129,.814-.3-.442-.684-.627-.168-.578-.212-.149-1.029-.919-.813-.171,.305,.143,.63,.818,1.022,1.192,.063,.847,.258,2.221,.288,3.015-.809,.711-.96,.011-1.425-.246,.002-.225-.005-.444-.005-.573,.11-.505-.579-3.324-.041-2.908-.042-.23-.467-1.414-.568-.555,.225,.773,.255,2.393,.371,3.462,.011,.101,.024,.291,.035,.497-.002,0-.003-.001-.004-.002-.664,.19-.965,2.265-1.701,1.066,1.334-1.002,.41-3.321,.327-4.613,.008-.082,.139,.112,.207,.126,.049-.187-.281-.67-.399-.912-.476,.972,.751,3.11,.284,4.421,.061-.629-.685-1.392-1.221-1.883,.048-.267-.519-2.128-.024-1.609,.045-.023-.005-.16-.067-.282-.198-.331-.312-.975-.476-.273,.137,.173,.197,1.62,.287,1.904-.317-.37-1.855-1.462-1.123-1.362-.006-.02-.038-.068-.119-.117-.276-.09-.873-.788-.694-.054,.038,.003,.106,.049,.155,.107,.379,.518,1.263,1.37,1.843,1.886,.221,2.776,.599,3.546,.278,.267,.461,.469,.995,.976,1.103,1.565-.097,.201-.238,.38-.445,.525-.058-.379,.005-.686-.05-.715-.115,.07-.081,.556-.059,.79-1.629,.876-1.893,1.088,.063,.311,.679,1.706,1.129-.408,1.804-.783,.018,.016,.033,.025,.051,.04,.007,.215,.008,.399-.001,.459,.09-.001,.139-.14,.165-.33,1.967,1.537,1.697-1.371,1.455-2.888,.33,.384,.542,.608,.806,.888Z" fill="#fff"></path>
                  <path d="M22.159,20.66h0s-1.5,0-1.5,0c.115-.083,.176-.205,.159-.327-.01-.077-.087-.135-.181-.143h-.047c-.114,.011-.196,.093-.184,.183l.005,.035,.006,.053c.006,.067,0,.134-.019,.199H9.313c.165,.24,.465,.386,.789,.386l10.116-.006c-.116,.083-.176,.205-.16,.328,.012,.09,.114,.154,.227,.143,.114-.011,.196-.093,.184-.183l-.005-.035-.006-.053c-.006-.067,0-.134,.019-.2h1.248s.035,.058,.035,.058c.031,.053,.071,.1,.117,.142l.064,.053h0c.126,.088,.287,.14,.456,.14,.16,0,.289-.111,.289-.248v-.072c0-.25-.237-.453-.529-.453Z" fill="#fff"></path>
                </svg>
                Saudi Arabia Office
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>Building No. 7036, Saiyda st., Riyadh Saudi Arabia | P.O. Box: 12796, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">📞</span>
                  <a href="tel:+966550846532" className="text-muted-foreground hover:text-primary transition-colors">
                    +966 550846532
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions & Services Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Solutions & Services</div>
            <ul className="space-y-2">
              {solutions.map(solution => <li key={solution.href}>
                  <Link to={solution.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {solution.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Our Vendors Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Our Vendors</div>
            <ul className="space-y-2">
              {vendors.map(vendor => <li key={vendor.href}>
                  <Link to={vendor.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {vendor.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company & Partners Section */}
          <div className="space-y-4">
            <div className="text-base font-semibold text-foreground">Company</div>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About S2
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://odoo.s2mgt.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Employee Login
                </a>
              </li>
            </ul>
            
            <div className="mt-5">
              <div className="text-base font-semibold text-foreground mb-2">Partners</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://preview--pipeline-pro-portal.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Partner Portal 
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-border mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center lg:space-y-0">
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/company/s2-management-solutions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              <Linkedin className="h-6 w-6 my-[6px]" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 S2 Management Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>;
}