export interface WWWMArticleContent {
  text: string;
  bold: boolean;
}

export interface WWWMArticle {
  id: number;
  title: string;
  content: Array<WWWMArticleContent>;
}

export const wwwmArticles: Array<WWWMArticle> = [
  {
    id: 1,
    title: 'Expertise and Experience',
    content: [
      {
        text: 'Boasting over five years in the dynamic marketing landscape, my expertise extends seamlessly from strategic social media planning to captivating content creation.',
        bold: true
      },
      {
        text: 'Clients benefit from a holistic approach, ensuring effective brand messaging.',
        bold: false
      }
    ]
  },
  {
    id: 2,
    title: 'Consistency and Cohesion',
    content: [
      {
        text: 'From formulating strategic social media plans to creating visually appealing and coherent content, I ensure a seamless and unified brand image.',
        bold: true
      },
      {
        text: 'Clients can trust that their brand messaging will maintain a consistent tone and style, fostering a recognisable and impactful presence across diverse platforms.',
        bold: false
      }
    ]
  },
  {
    id: 3,
    title: 'Time and Cost Efficiency',
    content: [
      {
        text: 'As a freelancer, I prioritise time and cost efficiency without compromising quality. This entails personalised attention and an agile workflow.',
        bold: true
      },
      {
        text: 'By choosing to work with me, clients benefit from a tailored and efficient partnership, optimising resources to meet project timelines and budget constraints effectively.',
        bold: false
      }
    ]
  }
];
