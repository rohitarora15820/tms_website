/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Simplify and sync online and offline sales',
    title: 'Simplify and sync online and offline sales',
    text:
      'Streamline your online and offline sales and inventory in real time, to easily stay on top of your high volume transaction & automation functions',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Multi-channel order management',
    title: 'Multi-channel order management',
    text:
      'Capture orders from any source and engage actively with suppliers, shipping providers, dropshippers and customers from one place. Having your inventory and shipping in one platform helps speed up your fulfilment.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Built-in Returns management',
    title: 'Built-in Returns management',
    text:
      'Manage customer order returns and refunds easily and minimise its impact on your business operations.  Issue full or partial refunds with reasons for return. Align and place items back into stock or remove them accordingly.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Bulk action on orders',
    title: 'Bulk action on orders',
    text:
      'Confirm or cancel orders, duplicate repeat orders, and export/import data in bulk. Then quickly print hundreds of shipping labels with one click. You can also add due dates and tags to particular customers or orders in bulk.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Business Intelligence',
    title: 'Business Intelligence',
    text:
      'With customised KPIs such as Conversion Rate Per Traffic Channel, average order value and Cart Abandonment Rate, you can gain insights on the success of your ad and marketing campaigns – so you can make data-driven impactful decisions in budget allocation.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Expert setup and support',
    title: 'Expert setup and support',
    text:
      'Easy to learn, use, and adopt. Our solution is easy to understand, learn and set up. Data migration and user adoption are fast and straightforward. Have running in days, not weeks. ​',
  },
];

export default function Feature() {
  return (
    <section  id="features" sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Exciting features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
