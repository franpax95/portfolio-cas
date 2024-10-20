export interface Testimonial {
  id: number;
  opinion: string;
  owner: string;
}

export const testimonials: Array<Testimonial> = [
  {
    id: 1,
    opinion:
      '“Cas has done a great job in helping us grow a digital presence on Instagram. Our feed became more attractive, and thanks to her strategy we increased the number of followers and engagement, which resulted in more sales and brand recognition!”',
    owner: '— Daria, “MY RIGHT WHALE”'
  },
  {
    id: 2,
    opinion:
      '“Cas is a social media genius! She did a great content plan and strategy for us. I was initially overwhelmed, but she made the process smooth and enjoyable. Her creative ideas and attention to detail truly set my brand apart.\nThe results speak for themselves.”',
    owner: '— Amy, “NEW TALENT FESTIVAL”'
  },
  {
    id: 3,
    opinion:
      '“Cas is full of bright ideas and a can-do attitude. She has been a great asset to our team in creating engaging content across multiple social media platforms and running multiple themed campaigns, while actively researching and managing relationships with influencers.',
    owner: '— Constatinos, “AVANT SKINCARE”'
  }
];
