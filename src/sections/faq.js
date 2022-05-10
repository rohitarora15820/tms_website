/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "What is the pricing for the Ticketing Management app?",
    contents: (
      <div>
        Extension Technologies is committed to providing stellar service to
        retailers of all sizes and at all price points. The pricing model varies
        based on order volume and annual revenue, as well as features and
        functionality. Request a demo and one of the consultants will provide
        you with more information.
      </div>
    ),
  },
  {
    title: `Will my data in the mobile app be available when I am offline?`,
    contents: (
      <div>
        Yes, offline access to data functionality is available for all our
        mobile applications. The actions taken by your technician can be synced
        automatically in the backend whenever internet is available.
      </div>
    ),
  },
  {
    title: `Do you support Barcode Scanning within the mobile app? `,
    contents: <div>No, we do not provide this functionality as of now.</div>,
  },
  {
    title: `What is your turnaround time for handling an issue? What is the protocol for emergencies?
    `,
    contents: (
      <div>
        Extension Technologies will provide a Support Desk in a way that users
        can log incident tickets and change requests, view events/schedules of
        the change requests, share documentation, and collaborate on any aspect
        of the service being delivered. Critical issues will be responded to in
        30 minutes. High and Medium level issues will be responded to between 2
        to 8 hours. Low-level issues will be addressed within 16 hours.
      </div>
    ),
  },
  {
    title:
      "Can I grant different access rights to different levels of technicians or teams?",
    contents: (
      <div>
        Yes, each user will be assigned a role in the app. A role is made up of
        groups of permissions. A group of permissions will generally include all
        the permissions in one area of the order management system. You can
        customize the permissions in a group to include as many or as few
        features across all functions.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
