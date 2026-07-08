import {
  FiMonitor,
  FiSmartphone,
  FiLayout,
  FiLink,
  FiZap,
  FiCode,
} from "react-icons/fi";
import {  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaCode,
  FaTools,
  FaPaperPlane,
FaPiedPiper,
} from "react-icons/fa";
export const skills = [
{ title: "تطوير الواجهات", note: "تحويل التصميم إلى واجهات متجاوبة", Icon: FiMonitor, },
{ title: "التصميم المتجاوب", note: "تصميم يعمل على جميع الأجهزة", Icon: FiSmartphone, },
{ title: "صفحات الهبوط", note: "إنشاء صفحات هبوط ", Icon: FiLayout, },
{ title: "ربط واجهات البرمجة", note: "ربط الواجهات مع الخدمات الخارجية", Icon: FiLink, },
{ title: "تحسين الأداء", note: "تحسين سرعة وأداء الموقع", Icon: FiZap, }, 
{ title: "كود نظيف", note: "كتابة كود منظمة", Icon: FiCode, },
{ title: "إطار عمل React", note: "بناء واجهات تفاعلية باستخدام React", Icon: FaReact, },
];

export const links = [
  ["الرئيسية", "#home"],
  ["المهارات", "#skills"],
  ["الأعمال", "#work"],
  ["تواصل", "#contact"],
];

export const webSkills = [
  { name: "React Js", Icon: FaReact },
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJs },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Material UI", Icon: FaTools }, 
    { name: "API", Icon: FaPiedPiper }, 

];

export const otherSkills = [
  { name: "GitHub", Icon: FaGithub },
  { name: "VS Code", Icon: FaCode }, 
  { name: "Postman", Icon: FaPaperPlane }, 
];

export let projects = [
    {
    id: 1,
    projectName: " التصميم الداخلي",
    images: "https://i.postimg.cc/SRw5bNT3/interior.jpg",
    description: "موقع لشركة تصميم داخلي , نصمم مساحات هادئة بجودة تنفيذ عالية وحديثة",
    livePreview: "https://daralathar-interior-design.netlify.app/",
    sourceCode: "https://github.com/lubnaO/Interior-Design",
    pos: "center",
     title:"تصميم داخلي",
      language: ["React Js", "Tailwind", "Framer Motion", "JS"]
  },
    {
    id: 2,
    projectName: "شركة نمو",
    images: "https://i.postimg.cc/1Rdfcd2t/Business.jpg",
    description: "موقع لمتجر إلكتروني لـ مستحضرات التجميل يحتوي على مكياج وعناية بالبشرة وعطور بجودة عالية.",
    livePreview: "https://namo-website.netlify.app/",
    sourceCode: "https://github.com/lubnaO/BusinessPage",
    pos: "center",
    title:"أعمال",
    language: ["React", "tailwind", "AOS"]
  },
  {
    id: 3,
    projectName: "متجر بيوتي",
    images: "https://i.postimg.cc/VLxWzZF4/Screenshot-2026-06-15-000908.jpg",
    description: "موقع لمتجر إلكتروني لـ مستحضرات التجميل يحتوي على مكياج وعناية بالبشرة وعطور بجودة عالية.",
    livePreview: "https://beautyworldpro.netlify.app/",
    sourceCode: "https://github.com/lubnaO/Beauty",
    pos: "center",
    title:"بيوتي",
    language: ["React", "Bootstrap", "API", "AOS"]
  },
  {
    id: 4,
    projectName: "تطبيق الطقس",
    images: "https://i.postimg.cc/X7tP436c/weatherapp.jpg",
    description: "موقع إلكتروني يُستخدم للتحقق من درجة حرارة بلدك عن طريق كتابة اسم البلد في خانة البحث.",
    livePreview: "https://lubnao.github.io/weather/",
    sourceCode: "https://github.com/lubnaO/weather",
    pos: "center",
     title:"الطقس",
      language: ["API", "Html", "CSS", "Javascript"]
  },
  {
    id: 5,
    projectName: " متجر قهوة",
    images: "https://i.postimg.cc/L8nm0mBt/Bon-Coffee.jpg",
    description: "موقع إلكتروني لمقهى يحتوي على تفاصيل ومعلومات عن المقهى والمنتجات والعروض وغيرها من المعلومات حول بون كوفي.",
    livePreview: "https://lubnao.github.io/BonCoffee/",
    sourceCode: "https://github.com/lubnaO/BonCoffee",
     pos: "top",
     title:"قهوة",
     language: ["Html", "CSS", "Javascript"]

  },
  {
    id: 6,
    projectName: "موقع لشركة أعمال",
    images: "https://i.postimg.cc/Y2YGbzqr/applanding.jpg",
    description: " صفحة موقع تجاري تحتوي على جميع المعلومات المتعلقة بالشركة وخدماتها",
    livePreview: "https://lubnao.github.io/AppLanding-page/",
    sourceCode: "https://github.com/lubnaO/AppLanding-page",
    pos: "center 38%",
    title:"أعمال",
    language: ["Html", "CSS", "Javascript"]
  },
  // {
  //   id: 7,
  //   projectName: "مشروع قائمة المهام",
  //   images: "https://i.postimg.cc/c4TJb9qS/ToDo.jpg",
  //   description: "موقع بسيط لإدارة قائمة المهام التي تحتاج إلى إنجازها أو الأشياء التي تريد القيام بها.",
  //   livePreview: "https://lubnao.github.io/ToDoList-Project/",
  //   sourceCode: "https://github.com/lubnaO/ToDoList-Project",
  //    pos: "center 42%",
  //    title:"مهام" ,
  //    language: ["Html", "CSS", "Javascript"]
  // },
  {
    id: 8,
    projectName: "متجر تسوق",
    images: "https://i.postimg.cc/6p4LsF0B/ecommerce-(1).png",
    description: "موقع إلكتروني للتسوق عبر الإنترنت.",
    livePreview: "https://lubnao.github.io/EcommerceShopping/",
    sourceCode: "https://github.com/lubnaO/EcommerceShopping",
    pos: "center 80%",
    title:"تسوق",
         language: ["Html", "CSS", "Javascript"]

  }
]