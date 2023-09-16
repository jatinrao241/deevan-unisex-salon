import BackgroundPhoto from './assets/images/background-image.jpg';
import CoverPhoto from './assets/images/cover-image.jpg'
// import CoverVideoFile from './assets/videos/cover-video.mp4' // uncomment this code for cover video
import LogoOrProfilePhoto from './assets/images/brand-image-logo.jpg';
import QRCodePhoto from './assets/images/QR-Image.jpg';
import MainVCF from './assets/accessories/main.vcf';

export const dataSetForBasicData = {
    BackgroundImage: BackgroundPhoto,
    CoverImage: `url(${CoverPhoto})`,
    // CoverVideo: CoverVideoFile, // uncomment this code for cover video
    LogoOrProfileImage: LogoOrProfilePhoto,
    BrandNameOrCompanyName: document.title, // "Deevan Unisex Salon" ye bhi kr sakte hai agar title se alag name chaiye to 
    FolderName:"deevan-unisex-salon",
    MainHositingName:"jatinrao241.github.io",
    CallingNumber: "7011293650",
    WhatsAppNumber: "8882333189",
    EmailAddress: "rajkumarkake@gmail.com",
    DirectionLink: "https://goo.gl/maps/bV7we7R68ZTF6ndHA",
    WebSiteLink: "#!",
    BrandAddress: "H-6/B, Lower Ground Floor, Main Market Rd, Kalkaji, New Delhi 110019",
    AddToContact: MainVCF,
    FollowSocialMediaButton: "https://www.facebook.com/",
    FollowLinkFacebook: "https://www.facebook.com/",
    FollowLinkInstagram: "https://www.instagram.com/",
    FollowLinkTwitter: "https://twitter.com/",
    FollowLinkYouTube: "https://youtube.com/",
    BrandAboutUs: "Deevan Unisex Salon in New Delhi is one of the leading businesses in the Makeup & Beauty. We provide many different types of services including hair, beauty, make-up, and nail services.",
    businessesTiming : { OpeningTime: "09:00", ClosingTime: "10:00", },
    offDays : ['monday', 'Tuesday'],    
    FeedbackReviewFirst: "I have been getting facials here once a month since this salon opened. Deevan Unisex Salon is wonderful! The whole experience is so relaxing… I have fallen asleep! Love coming here!",
    FeedbackReviewSecond: "In the Deevan Unisex Salon, there are very talented employees! I was thrilled with my eyebrow wax and bang trim. I will be back for more services!",
    FeedbackReviewThird: "They all knew what they were doing, they were all great at their job and I love how my hair came out! Definitely recommend coming here.",
    QRCodeImage : QRCodePhoto,
};