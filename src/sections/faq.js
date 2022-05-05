/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Can I grant different access rights to different employees or teams?',
    contents: (
      <div>
        Yes, each user will be assigned a role in the app. A role is made up of groups of permissions. A group of permissions will generally include all the permissions in one area of the order management system. You can customize the permissions in a group to include as many or as few features across all functions.
      </div>
    ),
  },
  {
    title: 'What is the pricing for the OMS app?',
    contents: (
      <div>
    Extension Technologies is committed to providing stellar service to retailers of all sizes and at all price points. The pricing model varies based on order volume and annual revenue, as well as features and functionality. Request a demo and one of the consultants will provide you with more information.
      </div>
    ),
  },
  {
    title: `What is your turnaround time for handling an issue? What is the protocol for emergencies?`,
    contents: (
      <div>
     Extension Technologies will provide a Support Desk in a way that users can log incident tickets and change requests, view events/schedules of the change requests, share documentation, and collaborate on any aspect of the service being delivered. Critical issues will be responded to in 30 minutes. High and Medium level issues will be responded to between 2 to 8 hours. Low-level issues will be addressed within 16 hours.
      </div>
    ),
  },
  {
    title: `Will Extension Technologies integrate with a custom shopping cart or another eCommerce platform not listed on your site?`,
    contents: (
      <div>
        Yes, we will integrate with any shopping cart that provides an open API. The key here is being able to pass data back and forth – order, customer, product, inventory data.  Our table structure will only be based on the amount of information your eCommerce platform’s API can provide.
      </div>
    ),
  },
  {
    title: `Does your app support parent-child products?`,
    contents: (
      <div>
       Yes, we can support variations of products such as different sizes and colors
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
