import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What types of relief goods do you provide?",
    children: (
      <p>
        Answer: We provide a wide range of relief goods, including food
        supplies, water, shelter kits, hygiene products, clothing, and medical
        supplies. Our goal is to address the immediate needs of individuals and
        communities affected by disasters.
      </p>
    ),
  },
  {
    key: "2",
    label: "How can I donate relief goods?",
    children: (
      <p>
        Answer: Donating relief goods is easy! You can either drop off your
        donations at our designated collection points or make a monetary
        donation online. Visit our website for more information on how to
        donate.
      </p>
    ),
  },
  {
    key: "3",
    label: "Where do my donations go?",
    children: (
      <p>
        Answer: Your donations go directly towards supporting our relief
        efforts. We work closely with local organizations and partners to ensure
        that relief goods reach those who need them most. We prioritize
        transparency and accountability in all our operations.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I volunteer to help distribute relief goods?",
    children: (
      <p>
        Answer: Yes, we welcome volunteers to join us in our relief efforts.
        Whether it's packing relief kits, organizing donation drives, or
        distributing goods on the ground, there are plenty of ways to get
        involved. Visit our website or contact us to learn more about
        volunteering opportunities.
      </p>
    ),
  },
  {
    key: "5",
    label: "How can I request relief goods for my community?",
    children: (
      <p>
        Answer: If your community is in need of assistance, please reach out to
        us through our contact form or hotline. We'll assess the situation and
        do our best to provide the necessary relief goods and support.
      </p>
    ),
  },
];
const FrequentlyAskedQuestions = () => {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Frequently Asked Questions
      </h1>
      <Collapse accordion items={items} />
    </div>
  );
};

export default FrequentlyAskedQuestions;
