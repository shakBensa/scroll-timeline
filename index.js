import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


const scrollTracker = document.querySelector('.scroll-tracker')
const animatedImage = document.querySelectorAll('.image-rotate-in')
const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})
animatedImage.forEach(img => {
    const imgOffsetTop =img.offsetTop;
    const imgHeight = img.offsetHeight;
    const imgTimeline = new ScrollTimeline({
        scrollOffsets: [
            CSS.px(imgOffsetTop-imgHeight - window.innerHeight + 900),
            CSS.px(imgOffsetTop-200),
            // { target: img, edge: "end", threshold: '1' },
            // { target: img, edge: "start", threshold: '1' }
        ],
    });
    img.animate(
        {
            transform: [
            'perspective(1000px) rotateX(90deg)', 
            'perspective(1000px) rotate(0)',
        ],
        opacity:['0.9','1']
        },
        {
            duration: 1,
            easing:'linear',
            timeline: imgTimeline,
        }
    );
});

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

// document.getElementsByClassName('parallax').animate(
//     { transform: ['translateY(0)', 'translateY(100px)'] },
//     {
//         duration: 10000, // Totally arbitrary!
//         fill: 'both',
//         timeline: new ScrollTimeline({
//             scrollOffsets: [
//                 new CSSUnitValue(0, 'px'),
//                 new CSSUnitValue(200, 'px')
//             ]
//         })
//     });