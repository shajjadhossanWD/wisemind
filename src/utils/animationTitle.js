import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationTitle = () => { 
		 
		if (typeof window !== "undefined") {
			"use strict" 
				let splitTitleLines = gsap.utils.toArray(".anim_heading_title");
				splitTitleLines.forEach((splitTextLine) => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: splitTextLine,
							start: "top 90%",
							end: "bottom 60%",
							scrub: false,
							markers: false,
							toggleActions: "play none none none",
						},
					});
	
					const itemSplitted = new SplitText(splitTextLine, {
						type: "words, lines",
					});
					gsap.set(splitTextLine, { perspective: 400 });
					itemSplitted.split({ type: "lines" });
					tl.from(itemSplitted.lines, {
						duration: 1,
						delay: 0.3,
						opacity: 0,
						rotationX: -80,
						force3D: true,
						transformOrigin: "top center -50",
						stagger: 0.1,
					});
				});
		 
	
			let textTextWrittings = gsap.utils.toArray(".anim_text_writting");
			textTextWrittings.forEach((splitTextLine) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine,
						start: "top 90%",
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});
				let textCharsWritting = new SplitText(splitTextLine, {
					type: "chars, words",
				});
				tl.from(
					textCharsWritting.chars,
					{
						duration: 0.5,
						x: 100,
						autoAlpha: 0,
						stagger: 0.1,
					},
					"-=1"
				);
			});
	
			let textWordWrittings = gsap.utils.toArray(".anim_word_writting");
	
			textWordWrittings.forEach((splitWordLine) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitWordLine,
						start: "top 90%",
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});
				let textWordWritting = new SplitText(splitWordLine, {
					type: "words",
				});
				tl.from(
					textWordWritting.words,
					{
						duration: 0.7,
						x: 100,
						delay: 0.5,
						autoAlpha: 0,
						stagger: 0.2,
					},
					"-=1"
				);
			});
	
			// paragraph animation
			let splitTextLines = gsap.utils.toArray(".anim_text");
	
			splitTextLines.forEach((splitTextLine) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine,
						start: "top 90%",
						duration: 2,
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});
	
				const itemSplitted = new SplitText(splitTextLine, {
					type: "lines",
				});
				gsap.set(splitTextLine, {
					perspective: 400,
				});
				itemSplitted.split({
					type: "lines",
				});
				tl.from(itemSplitted.lines, {
					duration: 1,
					delay: 0.5,
					opacity: 0,
					rotationX: -80,
					force3D: true,
					transformOrigin: "top center -50",
					stagger: 0.1,
				});
			});
	
			let blogAnim = gsap.utils.toArray(".anim_blog");
			gsap.set(blogAnim, {
				opacity: 0,
				y: -100,
				x: -100,
			});
	
			// if (blogAnim) {
			// 	blogAnim.forEach((item, i) => {
			// 		gsap.to(item, {
			// 			scrollTrigger: {
			// 				trigger: item,
			// 				start: "top center+=200",
			// 				markers: false,
			// 			},
			// 			opacity: 1,
			// 			x: -0,
			// 			y: -0,
			// 			ease: "power2.out",
			// 			duration: 2,
			// 			stagger: 0.5,
			// 		});
			// 	});
			// }
	
			let cs_startup_agency = gsap.utils.toArray(".cs_startup_agency.cs_card");
			cs_startup_agency.forEach((cs_startup) => {
				gsap.set(cs_startup, {
					opacity: 0,
					x: +100,
				});
	
				gsap.to(cs_startup, {
					scrollTrigger: {
						trigger: cs_startup,
						start: "top center+=200",
						markers: false,
					},
					opacity: 1,
					x: -0,
					ease: "power2.out",
					duration: 2,
					stagger: {
						each: 0.4,
					},
				});
			});
	
			let aminTextUpanddowns = gsap.utils.toArray(".anim_text_upanddowns");
			let aminTextUpanddownChar = new SplitText(aminTextUpanddowns, {
				type: "chars",
			});
	
			let textUpanddown = gsap.timeline({
				scrollTrigger: {
					trigger: aminTextUpanddowns,
					start: "top 90%",
					end: "bottom 60%",
					scrub: false,
					markers: false,
					toggleActions: "play none none none",
				},
			});
	
			textUpanddown.from(aminTextUpanddownChar.chars, {
				duration: 2,
				opacity: 0,
				delay: 0.5,
				scale: 1.2,
				stagger: 0.5,
				y: 50,
				rotationX: 100,
				transformOrigin: "0% 30% -30",
				ease: "elastic",
				stagger: 0.05,
			});
	
			let divShowsZoom = gsap.utils.toArray(".anim_div_ShowZoom");
			divShowsZoom.forEach((showsZoom) => {
				gsap.set(showsZoom, {
					opacity: 0,
					scale: 0,
				});
	
				gsap.to(showsZoom, {
					scrollTrigger: {
						trigger: showsZoom,
						start: "top 90%",
						end: "bottom 60%",
						markers: false,
					},
					opacity: 1,
					scale: 1,
					delay: 0.5,
					ease: "power3.out",
					duration: 1,
					stagger: 0.5,
				});
			});
	
			let divShowsLeftSide = gsap.utils.toArray(".anim_div_ShowLeftSide");
			divShowsLeftSide.forEach((showsLeft) => {
				gsap.set(showsLeft, {
					opacity: 0,
					x: -100,
				});
	
				gsap.to(showsLeft, {
					scrollTrigger: {
						trigger: showsLeft,
						start: "top 90%",
						end: "bottom 60%",
						markers: false,
					},
					opacity: 1,
					x: -0,
					ease: "power2.out",
					duration: 2,
					stagger: 0.5,
				});
			});
	
			let divShowsRightSide = gsap.utils.toArray(".anim_div_ShowRightSide");
			divShowsRightSide.forEach((showsRight) => {
				gsap.set(showsRight, {
					opacity: 0,
					x: +100,
				});
	
				gsap.to(showsRight, {
					scrollTrigger: {
						trigger: showsRight,
						start: "top 90%",
						end: "bottom 60%",
						markers: false,
					},
					opacity: 1,
					x: -0,
					ease: "power2.out",
					duration: 2,
					stagger: 0.5,
				});
			});
	
			// let divShowsDowns = gsap.utils.toArray(".anim_div_ShowDowns");
			// divShowsDowns.forEach((showsDown) => {
			// 	gsap.set(showsDown, {
			// 		opacity: 0,
			// 		y: +100,
			// 	});
	
			// 	gsap.to(showsDown, {
			// 		scrollTrigger: {
			// 			trigger: showsDown,
			// 			start: "top 90%",
			// 			end: "bottom 60%",
			// 			markers: false,
			// 		},
			// 		opacity: 1,
			// 		y: -0,
			// 		ease: "power2.out",
			// 		duration: 2,
			// 		stagger: 1,
			// 	});
			// });
	
			let divShowsUps = gsap.utils.toArray(".anim_div_ShowUps");
			divShowsUps.forEach((showsUp) => {
				gsap.set(showsUp, {
					opacity: 0,
					y: -100,
				});
	
				gsap.to(showsUp, {
					scrollTrigger: {
						trigger: showsUp,
						start: "top 90%",
						end: "bottom 60%",
						markers: false,
					},
					opacity: 1,
					y: -0,
					ease: "power2.out",
					duration: 2,
					stagger: 0.5,
				});
			}); 
	
	
			let text_anim_top = gsap.utils.toArray(".anim_text_popup");
			text_anim_top.forEach((splitTextLine2) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine2,
						start: "top 90%",
						end: "bottom 60%",
						toggleActions: "play none none none",
					},
				});
		
				const itemSplitted = new SplitText(splitTextLine2, {
						type: "words",
					}),
					textNumWords = itemSplitted.words.length;
		
				gsap.delayedCall(0.05, function () {
					for (var i = 0; i < textNumWords; i++) {
						tl.from(
							itemSplitted.words[i],
							1,
							{
								force3D: true,
								scale: Math.random() > 0.5 ? 0 : 2,
								opacity: 0,
							},
							Math.random()
						);
					}
				});
			});
	
	
			let HomeDigital = gsap.timeline({});
			let mark = document.querySelector(".cs_hero .anim_banner_text_left");
			let eting = document.querySelector(".cs_hero .anim_banner_text_right");
			let cs_hero_style5_subtext = document.querySelector(".cs_hero .anim_subtext");
		
			let split_creatives = new SplitText(mark, {
				type: "chars,words",
			});
			let split_solutions = new SplitText(eting, {
				type: "chars,words",
			});
			let split_cs_hero_style5_subtext = new SplitText(cs_hero_style5_subtext, {
				type: "chars words",
			});
		
			HomeDigital.from(split_creatives.chars, {
				duration: 1.2,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05,
			});
			HomeDigital.from(
				split_solutions.chars,
				{
					duration: 1,
					x: 100,
					autoAlpha: 0,
					stagger: 0.01,
				},
				"-=1"
			);
		
			HomeDigital.from(
				split_cs_hero_style5_subtext.words,
				{
					duration: 1,
					x: 50,
					autoAlpha: 0,
					stagger: 0.05,
				},
				"-=1"
			);
	
		}

};

export default animationTitle;
