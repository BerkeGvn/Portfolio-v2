import pt1 from '../assets/pt-1.png';
import pt2 from '../assets/pt-2.png';
import pt3 from '../assets/pt-3.png';
import ojala1 from '../assets/ojala-1.png';
import ojala2 from '../assets/ojala-2.png';
import ojala3 from '../assets/ojala-3.png';
import bishoku1 from '../assets/bishoku-1.png';
import bishoku2 from '../assets/bishoku-2.png';
import bishoku3 from '../assets/bishoku-3.png';
import suiko1 from '../assets/suiko-1.png';
import suiko2 from '../assets/suiko-2.png';
import suiko3 from '../assets/suiko-3.png';
import roka1 from '../assets/roka-1.png';
import roka2 from '../assets/roka-2.png';
import roka3 from '../assets/roka-3.png';
import battleship1 from '../assets/battleship-1.png';
import battleship2 from '../assets/battleship-2.png';
import battleship3 from '../assets/battleship-3.png';

import type { ImageMetadata } from 'astro';

interface Project {
  title: string;
  desc: string;
  img?: ImageMetadata[];
  link?: string;
  github?: string;
  design?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: '業務マッチングプラットフォーム',
    desc: '企業向けの業務マッチング・管理プラットフォームを開発しました。バックエンドにLaravel、フロントエンドにNext.jsを採用し、認証、通知、ダッシュボード、チャット機能などの実装を担当。UIはShadcn UIとTailwind CSSを用いて設計し、拡張性と保守性を重視した構成となっています。',
    img: [pt1, pt2, pt3],
    tags: ['Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Nginx', 'Tailwind CSS'],
  },
  {
    title: 'OJALA',
    desc: 'Vue.js、SCSS、GSAP、Typescriptを使用したモダンなUIで、ダイナミックなインタラクション、レスポンシブデザイン、視覚的な美しさを備えた E コマース家具ショップとなっております。',
    img: [ojala1, ojala2, ojala3],
    link: 'https://ojala.vercel.app/',
    github: 'https://github.com/BerkeGvn/Ojala',
    design:
      'https://www.figma.com/design/LIXlzw3cARNDYP6gxZvvsw/OJALA?node-id=21-489&t=IMktNEP6ItZe2FIy-1',
    tags: ['Vue.js', 'SCSS', 'GSAP', 'TypeScript'],
  },
  {
    title: '美食道',
    desc: 'これは、美食道という架空のダイエットプランニングサービスのためのランディングページです。健康と美を促進するパーソナライズされた食事プランを提供します。Nuxt 3を使用して構築し、Tailwind CSSでスタイリングしました。クリーンでモダンなデザインで、サービス、プラン、成功事例、お問い合わせ情報を紹介します。',
    img: [bishoku1, bishoku2, bishoku3],
    link: 'https://bishokudo.vercel.app/',
    github: 'https://github.com/BerkeGvn/Bishokudo',
    design: 'https://www.figma.com/design/Wm3dAcdDbRDRnLL8T045HT/Bishokud%C5%8D?node-id=3-2',
    tags: ['Nuxt 3', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Suiko App',
    desc: 'SuikoはVue.js、SCSS、JavaScriptを使って作られたタスク管理アプリケーションです。ユーザーはカスタムリストを作成し、カレンダーインターフェースを使用してタスクを整理することができます。Todoやスケジュールを効率的に管理する体験を提供します。',
    img: [suiko1, suiko2, suiko3],
    link: 'https://berkegvn.github.io/suiko-task-app/Guide',
    github: 'https://github.com/BerkeGvn/suiko-task-app',
    design: 'https://www.figma.com/design/4f2c0LZuKRXsXb5MLYJHAE/Suiko-Task-App?node-id=0-1&p=f',
    tags: ['Vue.js', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Roka Wine',
    desc: 'Roka Wineは、モダンでアニメーション的なユーザーインターフェースを持つランディングページです。ダイナミックなビジュアルと滑らかなアニメーションが調和したデザインは、ワイン好きの方に楽しい体験を提供します。',
    img: [roka1, roka2, roka3],
    link: 'https://berkegvn.github.io/Roka-Wine/',
    github: 'https://github.com/BerkeGvn/Roka-Wine',
    design: 'https://www.figma.com/design/wRXCOLfsC8CmNGpeX6Y6VA/Roka-Ecom-v1?node-id=222-3&p=f',
    tags: ['Vue.js', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Battleship Game',
    desc: 'JavaScriptで作られた戦艦ゲームは、戦略的な船の配置をドラッグ＆ドロップで行うことができます。対戦相手は人工知能です。シンプルで直感的なインターフェースを提供し、プレイヤーは自分の船を配置し、相手の船を撃沈することを目指します。',
    img: [
      battleship1,
      battleship2,
      battleship3,
    ],
    link: 'https://berkegvn.github.io/battleship_game/',
    github: 'https://github.com/BerkeGvn/battleship_game',
    tags: ['HTML', 'SCSS', 'JavaScript'],
  },
];

export default projects;
