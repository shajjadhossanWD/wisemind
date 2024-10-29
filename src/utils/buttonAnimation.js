import { gsap } from "gsap";
import jQuery from "jquery";

export function buttonAnimation() {
 
	if (typeof window !== "undefined") {
		(function ($) {
			"use strict";

			$(".cs_hero_btn").on("mouseenter", function (e) {
				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;

				$(this).find("span").css({
					top: y,
					left: x,
				});
			});

			$(".cs_hero_btn").on("mouseout", function (e) {
				var x = e.pageX - $(this).offset().left;
				var y = e.pageY - $(this).offset().top;

				$(this).find("span").css({
					top: y,
					left: x,
				});
			});

			// Button Move Animation
			const all_btns = gsap.utils.toArray(".cs_round_btn_wrap");
			if (all_btns.length > 0) {
				var all_btn = gsap.utils.toArray(".cs_round_btn_wrap");
			} else {
				var all_btn = gsap.utils.toArray("#cs_round_btn_wrap");
			}
			const all_btn_cirlce = gsap.utils.toArray(".cs_hero_btn");
			all_btn.forEach((btn, i) => {
				$(btn).on("mousemove", function (e) {
					callParallax(e);
				});

				function callParallax(e) {
					parallaxIt(e, all_btn_cirlce[i], 80);
				}

				function parallaxIt(e, target, movement) {
					var $this = $(btn);
					var relX = e.pageX - $this.offset().left;
					var relY = e.pageY - $this.offset().top;

					gsap.to(target, 0.5, {
						x: ((relX - $this.width() / 2) / $this.width()) * movement,
						y: ((relY - $this.height() / 2) / $this.height()) * movement,
						ease: Power2.easeOut,
					});
				}
				$(btn).on("mouseleave", function (e) {
					gsap.to(all_btn_cirlce[i], 0.5, {
						x: 0,
						y: 0,
						ease: Power2.easeOut,
					});
				});
			});

		})(jQuery);
	}
	
}
	
