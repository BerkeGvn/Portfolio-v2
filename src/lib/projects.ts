interface Project {
  title: string;
  desc: string;
  img?: string[];
  link?: string;
  github?: string;
  design?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: '業務マッチングプラットフォーム',
    desc: '企業向けの業務マッチング・管理プラットフォームを開発しました。バックエンドにLaravel、フロントエンドにNext.jsを採用し、認証、通知、ダッシュボード、チャット機能などの実装を担当。UIはShadcn UIとTailwind CSSを用いて設計し、拡張性と保守性を重視した構成となっています。',
    img: [
      '/src/assets/projects/pt-1.png',
      '/src/assets/projects/pt-2.png',
      '/src/assets/projects/pt-3.png',
    ],
    tags: ['Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Nginx', 'Tailwind CSS'],
  },
  {
    title: 'OJALA',
    desc: 'Vue.js、SCSS、GSAP、Typescriptを使用したモダンなUIで、ダイナミックなインタラクション、レスポンシブデザイン、視覚的な美しさを備えた E コマース家具ショップとなっております。',
    img: [
      '/src/assets/projects/ojala-1.png',
      '/src/assets/projects/ojala-2.png',
      '/src/assets/projects/ojala-3.png',
    ],
    link: 'https://ojala.vercel.app/',
    github: 'https://github.com/BerkeGvn/Ojala',
    design:
      'https://www.figma.com/design/LIXlzw3cARNDYP6gxZvvsw/OJALA?node-id=21-489&t=IMktNEP6ItZe2FIy-1',
    tags: ['Vue.js', 'SCSS', 'GSAP', 'TypeScript'],
  },
  {
    title: '美食道',
    desc: 'これは、美食道という架空のダイエットプランニングサービスのためのランディングページです。健康と美を促進するパーソナライズされた食事プランを提供します。Nuxt 3を使用して構築し、Tailwind CSSでスタイリングしました。クリーンでモダンなデザインで、サービス、プラン、成功事例、お問い合わせ情報を紹介します。',
    img: ['/src/assets/bishoku-1.png', '/src/assets/bishoku-2.png', '/src/assets/bishoku-3.png'],
    link: 'https://bishokudo.vercel.app/',
    github: 'https://github.com/BerkeGvn/Bishokudo',
    design: 'https://www.figma.com/design/Wm3dAcdDbRDRnLL8T045HT/Bishokud%C5%8D?node-id=3-2',
    tags: ['Nuxt 3', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Suiko App',
    desc: 'SuikoはVue.js、SCSS、JavaScriptを使って作られたタスク管理アプリケーションです。ユーザーはカスタムリストを作成し、カレンダーインターフェースを使用してタスクを整理することができます。Todoやスケジュールを効率的に管理する体験を提供します。',
    img: ['/src/assets/suiko-1.png', '/src/assets/suiko-2.png', '/src/assets/suiko-3.png'],
    link: 'https://berkegvn.github.io/suiko-task-app/Guide',
    github: 'https://github.com/BerkeGvn/suiko-task-app',
    design: 'https://www.figma.com/design/4f2c0LZuKRXsXb5MLYJHAE/Suiko-Task-App?node-id=0-1&p=f',
    tags: ['Vue.js', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Roka Wine',
    desc: 'Roka Wineは、モダンでアニメーション的なユーザーインターフェースを持つランディングページです。ダイナミックなビジュアルと滑らかなアニメーションが調和したデザインは、ワイン好きの方に楽しい体験を提供します。',
    link: 'https://berkegvn.github.io/Roka-Wine/',
    github: 'https://github.com/BerkeGvn/Roka-Wine',
    design: 'https://www.figma.com/design/wRXCOLfsC8CmNGpeX6Y6VA/Roka-Ecom-v1?node-id=222-3&p=f',
    tags: ['Vue.js', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Battleship Game',
    desc: 'JavaScriptで作られた戦艦ゲームは、戦略的な船の配置をドラッグ＆ドロップで行うことができます。対戦相手は人工知能です。シンプルで直感的なインターフェースを提供し、プレイヤーは自分の船を配置し、相手の船を撃沈することを目指します。',
    img: [
      '/src/assets/battleship-1.png',
      '/src/assets/battleship-2.png',
      '/src/assets/battleship-3.png',
    ],
    link: 'https://berkegvn.github.io/battleship_game/',
    github: 'https://github.com/BerkeGvn/battleship_game',
    tags: ['HTML', 'SCSS', 'JavaScript'],
  },
];

export default projects;
