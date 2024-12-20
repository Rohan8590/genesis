"use strict";
! function(p) {
    function m() {
        var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        };
        if (null == e.any()) {
            var t = new Scrollax;
            t.reload(), t.init()
        }
    }

    function h() {
        var i = p(".nav-sticky"),
            e = i.outerHeight(),
            a = p(document).scrollTop();
        p(window).on("load", function() {
            p(document).scrollTop() > e && (i.hasClass("sticky-header") ? i.removeClass("sticky-header") : i.addClass("sticky-header"))
        }), p(window).on("scroll", function() {
            var e = p(document).scrollTop(),
                t = p(".sticky-header");
            a < e ? t.addClass("sticky") : t.removeClass("sticky"), "top" === t.attr("data-scroll-to") && (e < a ? t.addClass("sticky") : t.removeClass("sticky")), 0 === e ? (i.removeClass("sticky-header"), t.removeClass("sticky")) : i.addClass("sticky-header"), a = p(document).scrollTop()
        })
    }

    function v() {
        p(".xs-logo").each(function() {
            var e = p(this).children().clone(),
                t = p(".nav-brand");
            991 < p(window).width() ? 0 < t.children().length && t.children().remove() : 0 === t.children().length && t.append(e)
        })
    }

    function g() {
        var e = p(".bouble-slider-privew").outerHeight(!0),
            t = p(".bouble-slider-thumb .owl-stage-outer"),
            i = p(".bouble-slider-thumb .owl-stage-outer").outerWidth(!0),
            a = p(".bouble-slider-thumb .owl-stage");
        991 < p(window).width() && (t.css("height", e), a.css("width", i), a.css("height", e))
    }
    p.fn.myOwl = function(e) {
        var t = p.extend({
            items: 1,
            dots: !1,
            loop: !0,
            mouseDrag: !0,
            touchDrag: !0,
            nav: !1,
            autoplay: !0,
            navText: ["", ""],
            margin: 0,
            stagePadding: 0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            navRewind: !1,
            responsive: {},
            animateOut: "",
            animateIn: "",
            center: "",
            merge: "",
            autoWidth: ""
        }, e);
        return this.owlCarousel({
            items: t.items,
            loop: t.loop,
            mouseDrag: t.mouseDrag,
            touchDrag: t.touchDrag,
            nav: t.nav,
            navText: t.navText,
            dots: t.dots,
            margin: t.margin,
            stagePadding: t.stagePadding,
            autoplay: t.autoplay,
            autoplayTimeout: t.autoplayTimeout,
            autoplayHoverPause: t.autoplayHoverPause,
            animateOut: t.animateOut,
            animateIn: t.animateIn,
            responsive: t.responsive,
            navRewind: t.navRewind,
            center: t.center,
            merge: t.merge,
            autoWidth: t.autoWidth
        })
    }, p.fn.instaFeed = function(e) {
        var i = p.extend({
            token: "",
            $this: p(this),
            photos: 0
        }, e);
        p.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent",
            dataType: "jsonp",
            type: "GET",
            data: {
                access_token: i.token,
                count: i.photos
            },
            success: function(e) {
                for (var t in e.data) i.$this.append('<li><a href="' + e.data[t].link + '" ><img src="' + e.data[t].images.standard_resolution.url + '"></a></li>')
            },
            error: function(e) {
                console.log(e)
            }
        })
    }, p.fn.myGradientChart = function(e) {
        var o = p.extend({
            barColor: "",
            barColor1: "",
            barColor2: "",
            scaleColor: "transparent",
            trackColor: "#f7f7f7",
            lineCap: "square",
            size: 140,
            lineWidth: 8
        }, e);
        return this.easyPieChart({
            barColor: function(e) {
                var t = this.renderer.getCtx(),
                    i = this.renderer.getCanvas(),
                    a = t.createLinearGradient(0, 0, i.width, 0);
                return a.addColorStop(0, o.barColor1), a.addColorStop(1, o.barColor2), a
            },
            scaleColor: o.scaleColor,
            trackColor: o.trackColor,
            lineCap: o.lineCap,
            size: o.size,
            lineWidth: o.lineWidth
        })
    };
    var y = function() {
        var e = p(".xs-header");
        p(".xs-inner-banner .inner-banner").css("marginTop", e.outerHeight() / 2)
    };
    p.fn.scrollView = function() {
        return this.each(function() {
            p("html, body").animate({
                scrollTop: p(this).offset().top
            }, 1e3)
        })
    }, p.fn.goCurrentSection = function() {
        return this.on("click", function(e) {
            if ("" !== this.hash) {
                e.preventDefault();
                var t = this.hash;
                p("html, body").animate({
                    scrollTop: p(t).offset().top
                }, 1e3, function() {
                    window.location.hash = t
                })
            }
        })
    }, p.fn.mySelect = function(e) {
        var t = p(this),
            i = p(this).children("option");
        t.addClass("select-hidden"), t.wrap('<div class="select"></div>'), t.after('<div class="select-styled"></div>');
        var a = t.next(".select-styled");
        a.text(t.children("option").eq(0).text());
        for (var o = p("<ul />", {
                class: "select-options"
            }).insertAfter(a), n = 0; n < i.length; n++) p("<li />", {
            text: t.children("option").eq(n).text(),
            rel: t.children("option").eq(n).val()
        }).appendTo(o);
        var s = o.children("li");
        a.on("click", function(e) {
            e.stopPropagation(), p(".select-styled.active").not(this).each(function() {
                p(this).removeClass("active").next(".select-options").fadeIn()
            }), p(this).toggleClass("active").next(".select-options").toggle(), p(this).parent().toggleClass("focus")
        }), s.on("click", function(e) {
            e.stopPropagation(), a.text(p(this).text()).removeClass("active"), t.val(p(this).attr("rel")), o.hide(), p(this).parent().parent().hasClass("focus") && p(this).parent().parent().removeClass("focus")
        }), p(document).on("click", function() {
            a.removeClass("active"), o.hide()
        })
    }, p.fn.customNumber = function(e) {
        var t = p.extend({
            plusIcon: "",
            minusIcon: ""
        }, e);
        return this.append('<span class="add">' + t.plusIcon + "</span>"), this.append('<span class="sub">' + t.minusIcon + "</span>"), this.each(function() {
            var e = p(this),
                t = e.find('input[type="number"]');
            e.find(".add"), e.find(".sub"), t.parent().on("click", ".sub", function(e) {
                e.preventDefault(), t.val() > parseInt(t.attr("min"), 10) && t.val(function(e, t) {
                    return --t
                })
            }), t.parent().on("click", ".add", function(e) {
                e.preventDefault(), t.val() < parseInt(t.attr("max"), 10) && t.val(function(e, t) {
                    return ++t
                })
            })
        })
    }, p.fn.onScreen = function() {
        var e = this.offset(),
            t = (p(window), {
                top: p(window).scrollTop(),
                left: p(window).scrollLeft()
            });
        return t.right = t.left + p(window).width(), t.bottom = t.top + p(window).height(), e.right = e.left + this.outerWidth(), e.bottom = e.top + this.outerHeight(), !(t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom)
    }, p(window).on("load", function() {
        if (skrollr.init({
                forceHeight: !1,
                easings: {
                    easeOutBack: function(e, t) {
                        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
                    }
                },
                mobileCheck: function() {
                    return !1
                }
            }), m(), y(), h(), v(), g(), 0 < p(".cases-grid, .blog-grid").length) {
            var n = p(".cases-grid , .blog-grid"),
                e = function() {
                    var o, e = n.width(),
                        t = 1;
                    return 1200 < e ? t = 4 : 600 < e ? t = 3 : 450 < e ? t = 1 : 385 < e && (t = 1), o = Math.floor(e / t), n.find(".grid-item").each(function() {
                        var e = p(this),
                            t = e.attr("class").match(/grid-item-w(\d)/),
                            i = e.attr("class").match(/grid-item-h(\d)/),
                            a = t ? o * t[1] : o;
                        i && i[1], e.css({
                            width: a
                        })
                    }), o
                };
            (r = function() {
                n.isotope({
                    resizable: !1,
                    itemSelector: ".grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), p(".filter-button-wraper .option-set").find("a").on("click", function() {
                var e = p(this),
                    t = e.parents(".option-set");
                t.find(".selected").removeClass("selected"), e.addClass("selected");
                var i = {},
                    a = t.attr("data-option-key"),
                    o = e.attr("data-option-value");
                return o = "false" !== o && o, i[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(e, i) : n.isotope(i), !1
            })
        }
        if (0 < p(".portfolio-grid").length) {
            var i = p(".portfolio-grid");
            e = function() {
                var o, e = i.width(),
                    t = 1;
                return 1200 < e ? t = 4 : 900 < e ? t = 4 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), i.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                i.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r)
        }
        if (0 < p(".portfolio-grid-loadmore").length) {
            var t = function(e) {
                    a.find(".hidden").removeClass("hidden");
                    var t = s.filteredItems.slice(e, s.filteredItems.length).map(function(e) {
                        return e.element
                    });
                   // p(t).addClass("hidden"), a.isotope("layout"), 0 == t.length ? p("#load-more").fadeOut() : p("#load-more").fadeIn()
                },
                a = p(".portfolio-grid-loadmore");
            e = function() {
                var o, e = a.width(),
                    t = 1;
                return 1200 < e ? t = 4 : 900 < e ? t = 4 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), a.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                a.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r);
            var o = l = 5,
                s = a.data("isotope");
            t(l), a.after('<div class="text-center"><a href="#" id="load-more" class="loadmore-btn"><i class="icon icon-plus"></i> Load More</a></div>'), p("#load-more").click(function(e) {
                e.preventDefault(), p("#filters").data("clicked") ? (o = l, j$("#filters").data("clicked", !1)) : o = o, t(o += l)
            })
        }
        if (0 < p(".blog-grid-2").length && (n = p(".blog-grid-2"), e = function() {
                var o, e = n.width(),
                    t = 1;
                return 1200 < e ? t = 2 : 900 < e ? t = 2 : 600 < e ? t = 2 : 450 < e ? t = 1 : 385 < e && (t = 1), o = Math.floor(e / t), n.find(".grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/grid-item-w(\d)/),
                        i = e.attr("class").match(/grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                n.isotope({
                    resizable: !1,
                    itemSelector: ".grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), p(".filter-button-wraper .option-set").find("a").on("click", function() {
                var e = p(this),
                    t = e.parents(".option-set");
                t.find(".selected").removeClass("selected"), e.addClass("selected");
                var i = {},
                    a = t.attr("data-option-key"),
                    o = e.attr("data-option-value");
                return o = "false" !== o && o, i[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(e, i) : n.isotope(i), !1
            })), 0 < p(".portfolio-grid-loadmore-2").length) {
            var r, l, d = function(e) {
                    c.find(".hidden").removeClass("hidden");
                    var t = s.filteredItems.slice(e, s.filteredItems.length).map(function(e) {
                        return e.element
                    });
                    //p(t).addClass("hidden"), c.isotope("layout"), 0 == t.length ? p("#load-more").fadeOut() : p("#load-more").fadeIn()
                },
                c = p(".portfolio-grid-loadmore-2");
            e = function() {
                var o, e = c.width(),
                    t = 1;
                return 1200 < e ? t = 3 : 900 < e ? t = 3 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), c.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                c.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), o = l = 6, s = c.data("isotope"), d(l), p("#load-more").click(function(e) {
                e.preventDefault(), p("#filters").data("clicked") ? (o = l, j$("#filters").data("clicked", !1)) : o = o, d(o += l)
            })
        }
        0 < p(".agency-portfolio-slider").length && p(".agency-portfolio-slider").myOwl({
            items: 5,
            nav: !1,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: !1
                },
                480: {
                    items: 1,
                    autoWidth: !1
                },
                768: {
                    items: 2,
                    autoWidth: !1
                },
                1024: {
                    items: 5,
                    autoWidth: !0
                }
            }
        })
    }), p(document).ready(function() {
        var e, t;
        m(), y(), t = ((e = p(".timeline").children()).length - 1) * e.outerHeight(), p(".timeline").append("<style>.timeline::before{height: " + t + "px}</style>"), e.last().css("paddingBottom", "0"), h(), v(), g(), 0 < p(".xs-menus").length && p(".xs-menus").xs_nav({
                mobileBreakpoint: 992
            }), 0 < p(".xs-hidden-menus").length && (p(".xs-hidden-menus").xs_nav({
                hidden: !0,
                offCanvasSide: "right"
            }), p(".offsetmenu-btn").click(function() {
                p(".xs-hidden-menus").data("xs_nav").toggleOffcanvas()
            })), p(document).on("submit", "#xs-contact-form", function(e) {
                e.preventDefault();
                var t, i = p("#xs_contact_name"),
                    a = p("#xs_contact_last_name"),
                    o = p("#xs_contact_number"),
                    n = p("#xs_contact_email"),
                    s = p("#xs_contact_subject"),
                    r = p("#x_contact_massage"),
                    l = p("#xs_contact_submit"),
                    d = !1;
                if (p(".xpeedStudio_success_message").remove(), 0 < i.length) {
                    if ("" === i.val().trim()) return i.addClass("invaild"), d = !0, i.focus(), !1;
                    i.removeClass("invaild")
                }
                if (0 < a.length) {
                    if ("" === a.val().trim()) return a.addClass("invaild"), d = !0, a.focus(), !1;
                    a.removeClass("invaild")
                }
                if (0 < o.length) {
                    if ("" === o.val().trim()) return o.addClass("invaild"), d = !0, o.focus(), !1;
                    o.removeClass("invaild")
                }
                if (0 < n.length) {
                    if ("" === n.val().trim()) return n.addClass("invaild"), d = !0, n.focus(), !1;
                    if (t = n.val().toLowerCase(), !/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)) return n.addClass("invaild"), d = !0, n.focus(), !1;
                    n.removeClass("invaild")
                }
                if (0 < s.length) {
                    if ("" === s.val().trim()) return s.addClass("invaild"), d = !0, s.focus(), !1;
                    s.removeClass("invaild")
                }
                if (0 < r.length) {
                    if ("" === r.val().trim()) return r.addClass("invaild"), d = !0, r.focus(), !1;
                    r.removeClass("invaild")
                }!1 === d && (l.before().hide().fadeIn(), p.ajax({
                    type: "POST",
                    url: "assets/php/contact-form.php",
                    data: {
                        xs_contact_name: i.val(),
                        xs_contact_last_name: a.val(),
                        xs_contact_number: o.val(),
                        xs_contact_email: n.val(),
                        xs_contact_subject: s.val(),
                        x_contact_massage: r.val()
                    },
                    success: function(e) {
                        l.after('<p class="xpeedStudio_success_message">' + e + "</p>").hide().fadeIn(), setTimeout(function() {
                            p(".xpeedStudio_success_message").fadeOut(1e3, function() {
                                p(this).remove()
                            })
                        }, 5e3), p("#xs-contact-form")[0].reset()
                    }
                }))
            }), 0 < p(".xs-video-popup").length && p(".xs-video-popup").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), 0 < p(".offset-side-bar").length && p(".offset-side-bar").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), p(".cart-group").addClass("isActive")
            }), 0 < p(".close-side-widget").length && p(".close-side-widget").on("click", function(e) {
                e.preventDefault(), p(".cart-group").removeClass("isActive")
            }), 0 < p(".navSidebar-button").length && p(".navSidebar-button").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), p(".info-group").addClass("isActive")
            }), 0 < p(".close-side-widget").length && p(".close-side-widget").on("click", function(e) {
                e.preventDefault(), p(".info-group").removeClass("isActive")
            }), p("body").on("click", function(e) {
                p(".info-group").removeClass("isActive"), p(".cart-group").removeClass("isActive")
            }), p(".xs-sidebar-widget").on("click", function(e) {
                e.stopPropagation()
            }), p("body").on("contextmenu", function(e) {
                return e.preventDefault(), e.stopPropagation(), !1
            }), p(document).on("keydown", function(e) {
                return !(e.ctrlKey && 85 == e.keyCode || e.ctrlKey && e.shiftKey && 73 == e.keyCode || e.ctrlKey && e.shiftKey && 75 == e.keyCode)
            }), 0 < p(".insta-feed").length && p(".insta-feed").instaFeed({
                token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                photos: 6
            }), 0 < p(".insta-feed2").length && p(".insta-feed2").instaFeed({
                token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                photos: 8
            }), 0 < p(".xs-modal-popup").length && p(".xs-modal-popup").magnificPopup({
                type: "inline",
                fixedContentPos: !1,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !1,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup"
                    }
                }
            }), 0 < p("img").length && p("img").each(function() {
                p(this).attr("draggable", "false"), p(this).on("mousedown", function(e) {
                    e.preventDefault && e.preventDefault()
                })
            }), 0 < p(".agency-office-slider").length && p(".agency-office-slider").myOwl({
                items: 3,
                autoWidth: !0,
                margin: 30,
                nav: !0,
                navText: ['<i class="icon icon-arrow-left" />', '<i class="icon icon-arrow-right" />'],
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: !1,
                        nav: !1,
                        margin: 0
                    },
                    480: {
                        items: 1,
                        autoWidth: !1,
                        nav: !1,
                        margin: 0
                    },
                    768: {
                        items: 2,
                        autoWidth: !1,
                        nav: !1
                    },
                    1024: {
                        items: 3,
                        autoWidth: !0,
                        nav: !0
                    }
                }
            }), 0 < p(".review-slider").length && p(".review-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-left-arrows"></i>', '<i class="icon icon-right-arrow"></i>'],
                dots: !0,
                responsive: {
                    0: {
                        nav: !1
                    },
                    480: {
                        nav: !1
                    },
                    768: {
                        nav: !1
                    },
                    1024: {
                        nav: !0
                    }
                }
            }), 0 < p(".client-slider").length && p(".client-slider").myOwl({
                items: 5,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: 5
                    }
                }
            }), 0 < p(".subscribe-form, .my-newsletter").length && p(".subscribe-form, .my-newsletter").ajaxChimp({
                url: "https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b"
            }), 0 < p(".agency-team-slider").length && p(".agency-team-slider").myOwl({
                items: 4,
                autoplay: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 4
                    }
                }
            }), p(".agency-single-team").hover(function() {
                p(this).parent().hasClass("hover") ? p(this).parent().removeClass("hover") : p(this).parent().addClass("hover")
            }),
            function() {
                for (var e = ["#b224ef", "#0369d1", "#ff4eb6"], t = ["#5055fa", "#00ecbc", "#ffcb6d"], i = p(".chart"), a = p(".chart-content"), o = 0; o < p(".single-piechart").length; o++) {
                    p(i[o]).myGradientChart({
                        barColor1: e[o],
                        barColor2: t[o]
                    });
                    var n = p(i[o]).attr("data-percent");
                    p(a[o]).append('<span class="gradient-title" style="background: linear-gradient(90deg, ' + e[o] + " 0%, " + t[o] + " 84%); color: " + e[o] + ';     -webkit-background-clip: text;">' + n + "%</span>")
                }
            }();
        var i = p(".number-percentage");
        0 < p(".waypoint-tigger").length && new Waypoint({
            element: document.getElementsByClassName("waypoint-tigger"),
            handler: function(e) {
                i.each(function() {
                    p(this).animateNumbers(p(this).attr("data-value"), !0, parseInt(p(this).attr("data-animation-duration"), 10));
                    var e = p(this).attr("data-value");
                    p(this).closest(".single-skill-bar").find(".skill-track").animate({
                        width: e + "%"
                    }, 3500)
                })
            },
            offset: "50%"
        }), p.fn.animateNumbers = function(i, a, o, n) {
            return this.each(function() {
                var e = p(this),
                    t = parseInt(e.text().replace(/,/g, ""), 10);
                a = void 0 === a || a, p({
                    value: t
                }).animate({
                    value: i
                }, {
                    duration: null == o ? 500 : o,
                    easing: null == n ? "swing" : n,
                    step: function() {
                        e.text(Math.floor(this.value)), a && e.text(e.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                    },
                    complete: function() {
                        parseInt(e.text(), 10) !== i && (e.text(i), a && e.text(e.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                    }
                })
            })
        }, p(function() {
            new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !1,
                live: !0,
                scrollContainer: null
            }).init()
        });
        var a, o = window.location.pathname,
            n = o.substr(o.lastIndexOf("/") + 1);
        if (p(".nav-menu li a").each(function(e, t) {
                var i = this.href.substr(this.href.lastIndexOf("/") + 1);
                n == i && (p([t]).addClass("active"), p([t]).parents().closest(".nav-submenu").parent("li") && p([t]).parents().closest(".nav-submenu").parent("li").addClass("active"), p([t]).parent().addClass("active"))
            }), 0 < p(".xs-image-popup").length && p(".xs-image-popup").magnificPopup({
                type: "image",
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
                    }
                },
                closeOnContentClick: !0,
                midClick: !0,
                gallery: {
                    enabled: !0
                }
            }), 0 < p(".post-gallery-slider").length && p(".post-gallery-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-left-arrows" />', '<i class="icon icon-right-arrow" />']
            }), p(".comment-reply-link").on("click", function(e) {
                e.preventDefault(), p("#comment-form").scrollView()
            }), 0 < p(".parallax-service").length && new Swiper(".parallax-service", {
                direction: "vertical",
                slidesPerView: 1,
                mousewheel: {
                    invert: !0,
                    releaseOnEdges: !0,
                    forceToAxis: !0
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }), 0 < p(".xs-select").length && p(".xs-select").mySelect(), 0 < p(".product-slider, .about-slider").length && p(".product-slider, .about-slider").myOwl({
                dots: !0,
                responsive: {
                    0: {
                        dots: !1
                    },
                    768: {
                        dots: !0
                    }
                }
            }), 0 < p(".custom_number").length && p(".custom_number").customNumber({
                plusIcon: '<i class="icon icon-up-arrow2"></i>',
                minusIcon: '<i class="icon icon-down-arrow2"></i>'
            }), 0 < p(".btn-floating").length && (p(".floating-icons-list").addClass("hidden"), p(".btn-floating").each(function() {
                p(this).on("click", function(e) {
                    e.preventDefault(), p(this).next().toggleClass("open"), p(this).next().toggleClass("hidden"), p(this).hasClass("active") ? p(this).removeClass("active") : p(this).addClass("active")
                })
            })), 0 < p(".rate-graph").length && p(".rate-graph").each(function() {
                p(this).find(".rate-graph-bar").attr("data-percent") <= 100 ? p(this).find(".rate-graph-bar").css({
                    width: p(this).find(".rate-graph-bar").attr("data-percent") + "%"
                }) : p(this).find(".rate-graph-bar").css({
                    width: "100%"
                })
            }), 0 < p(".banner-slider, .quote-slider").length && p(".banner-slider, .quote-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
                responsive: {
                    0: {
                        nav: !1
                    },
                    768: {
                        nav: !0
                    }
                }
            }), 0 < p(".scrollto-button").length && p(".scrollto-button").goCurrentSection(), 0 < p(".review-slider-preview").length && 0 < p(".review-slider-thumb").length) {
            var s = p(".review-slider-preview"),
                r = p(".review-slider-thumb"),
                l = 5,
                d = !0;
            s.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !1,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200
            }).on("changed.owl.carousel", function(e) {
                var t = e.item.count - 1,
                    i = Math.round(e.item.index - e.item.count / 2 - .5);
                i < 0 && (i = t), t < i && (i = 0), r.find(".owl-item").removeClass("current").eq(i).addClass("current");
                var a = r.find(".owl-item.active").length - 1,
                    o = r.find(".owl-item.active").first().index();
                r.find(".owl-item.active").last().index() < i && r.data("owl.carousel").to(i, 100, !0), i < o && r.data("owl.carousel").to(i - a, 100, !0)
            }), r.on("initialized.owl.carousel", function() {
                r.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: l,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: l,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: l
                    }
                }
            }).on("changed.owl.carousel", function(e) {
                if (d) {
                    var t = e.item.index;
                    s.data("owl.carousel").to(t, 100, !0)
                }
            }), r.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = p(this).index();
                s.data("owl.carousel").to(t, 300, !0)
            })
        }
        if (0 < p(".bouble-slider-privew").length && 0 < p(".bouble-slider-thumb").length && (s = p(".bouble-slider-privew"), r = p(".bouble-slider-thumb"), l = 5, d = !0, s.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                mouseDrag: !1,
                touchDrag: !1,
                responsiveRefreshRate: 200,
                responsive: {
                    0: {
                        touchDrag: !0
                    },
                    768: {
                        touchDrag: !0
                    },
                    1024: {
                        touchDrag: !1
                    }
                },
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>']
            }).on("changed.owl.carousel", function(e) {
                var t = e.item.count - 1,
                    i = Math.round(e.item.index - e.item.count / 2 - .5);
                i < 0 && (i = t), t < i && (i = 0), r.find(".owl-item").removeClass("current").eq(i).addClass("current");
                var a = r.find(".owl-item.active").length - 1,
                    o = r.find(".owl-item.active").first().index();
                r.find(".owl-item.active").last().index() < i && r.data("owl.carousel").to(i, 100, !0), i < o && r.data("owl.carousel").to(i - a, 100, !0)
            }), r.on("initialized.owl.carousel", function() {
                r.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: l,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                autoWidth: !0,
                mouseDrag: !1,
                touchDrag: !1,
                slideBy: l,
                responsiveRefreshRate: 100
            }).on("changed.owl.carousel", function(e) {
                if (d) {
                    var t = e.item.index;
                    s.data("owl.carousel").to(t, 100, !0)
                }
            }), r.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = p(this).index();
                s.data("owl.carousel").to(t, 300, !0)
            })), 0 < p(".single-page-menu li a").length && (p(".single-page-menu li a").on("click", function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                    var e = p(this.hash);
                    if ((e = e.length ? e : p("[name=" + this.hash.slice(1) + "]")).length) return p("html,body").animate({
                        scrollTop: e.offset().top
                    }, 1e3), !1
                }
            }), p(".single-page-menu li a").on("click", function() {
                var e = p(".nav-overlay-panel"),
                    t = p(".nav-menus-wrapper");
                t.hasClass("nav-menus-wrapper-open") && t.removeClass("nav-menus-wrapper-open"), "block" === e.css("display") && e.css("display", "none"), p(".offcanvas-menu-wraper").hasClass("active") && p(".offcanvas-menu-wraper").removeClass("active"), p(".fullscreen_menu_tigger").hasClass("open") && p(".fullscreen_menu_tigger").removeClass("open"), p(".off-canvas-menu-area").hasClass("nav-is-open") && p(".off-canvas-menu-area").removeClass("nav-is-open")
            })), 0 < p(".typed").length && new Typed(".typed", {
                strings: ["busy", "laziness"],
                typeSpeed: 40,
                loop: !0,
                backSpeed: 40,
                backDelay: 500,
                startDelay: 1e3
            }), 0 < p(".input-material").length) {
            for (var c = p(".input-material .form-control"), u = 0; u < c.length; u++) p(c[u]).wrap('<div class="form-group"></div>'), p(c[u]).after('<span class="bar"></span>');
            p(c).each(function(e, t) {
                var i = p(t).attr("placeholder");
                p(t).after('<span class="placeholder-title">' + i + "</span>"), p(t).removeAttr("placeholder")
            }), p(c).on("blur", function(e) {
                p(this).val() ? p(this).addClass("active") : p(this).removeClass("active")
            })
        }
        if (0 < p("#cal_to_action_animation").length && p("#cal_to_action_animation").parallax(), 0 < p(".xs-map-popup").length && p(".xs-map-popup").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), new Swiper(".vertical-slider", {
                direction: "vertical",
                loop: !1,
                mousewheel: !1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }), p("body").on("click", ".fullscreen_menu_tigger", function(e) {
                e.preventDefault(), p(this).toggleClass("open"), p(".offcanvas-menu-wraper").toggleClass("active"), p(".off-canvas-menu-area").toggleClass("nav-is-open")
            }), p(".off-canvas-menu-area").append('<div class="menu-overlay"></div>'), p(".offcanvas-menu .inner-submenu").prev("a").hasClass("tigger") ? p(".offcanvas-menu .inner-submenu").prev().removeClass("tigger") : p(".offcanvas-menu .inner-submenu").prev().addClass("tigger"), p(".offcanvas-menu li .tigger").on("click", function(e) {
                e.preventDefault(), p(this).next().hasClass("show") ? (p(this).next().removeClass("show"), p(this).next().slideUp(500), p(this).removeClass("active")) : (p(this).next().addClass("show"), p(this).parent().parent().find(".offcanvas-menu li ul").removeClass("show"), p(this).parent().parent().find(".offcanvas-menu li ul").slideUp(400), p(this).next().slideToggle(500), p(this).addClass("active"))
            }), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_8_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_8_1") : a("#rev_slider_8_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        viewPort: {
                            enable: !0,
                            outof: "wait",
                            visible_area: "100%",
                            presize: !1
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_15_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_15_1") : a("#rev_slider_15_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        viewPort: {
                            enable: !0,
                            outof: "wait",
                            visible_area: "100%",
                            presize: !1
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_16_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_16_1") : a("#rev_slider_16_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), 0 < p(".service-boxed").length && (p(".service-boxed").on("mouseenter", function() {
                p(this).hasClass("active") || p(this).addClass("active")
            }), p(".service-boxed").on("mouseleave", function(e) {
                p(this).hasClass("active") && p(this).removeClass("active")
            })), 0 < p(".portfolio-testimonial-slider").length) {
            var f = p(".portfolio-testimonial-slider");
            f.myOwl({
                loop: !1,
                dots: !0,
                animateIn: "fadeIn",
                animateOut: "fadeOut"
            }), f.on("mousewheel", ".owl-stage", function(e) {
                0 < e.deltaY ? f.trigger("next.owl") : f.trigger("prev.owl"), e.preventDefault()
            })
        }
        p(document).on("click", ".backtotop", function(e) {
            e.preventDefault(), p("body, html").stop().animate({
                scrollTop: 0
            }, 1e3)
        })
    }), p(window).on("scroll", function() {
        p(".shuffle-letter-title-wraper").each(function(e) {
            p(this).onScreen() && !p(this).hasClass("shuffle-title") && setTimeout(function() {
                p(this).find(".shuufle-letter-title").shuffleLetters(), p(this).addClass("shuffle-title")
            }.bind(this), 400)
        })
    }), p(window).on("resize", function() {
        y(), v(), g()
    }), 0 < p("#xs-map").length && google.maps.event.addDomListener(window, "load", function() {
        var e = {
                zoom: 11,
                center: new google.maps.LatLng(40.67, -73.94),
                styles: [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e9e9e9"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 21
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dedede"
                    }, {
                        lightness: 21
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#333333"
                    }, {
                        lightness: 40
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f2f2f2"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }]
            },
            t = document.getElementById("xs-map"),
            i = new google.maps.Map(t, e);
        new google.maps.Marker({
            position: new google.maps.LatLng(40.67, -73.94),
            icon: "assets/images/map-marker.png",
            map: i,
            title: "Agencyfi!"
        })
    })
}(jQuery);
"use strict";
! function(p) {
    function m() {
        var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        };
        if (null == e.any()) {
            var t = new Scrollax;
            t.reload(), t.init()
        }
    }

    function h() {
        var i = p(".nav-sticky"),
            e = i.outerHeight(),
            a = p(document).scrollTop();
        p(window).on("load", function() {
            p(document).scrollTop() > e && (i.hasClass("sticky-header") ? i.removeClass("sticky-header") : i.addClass("sticky-header"))
        }), p(window).on("scroll", function() {
            var e = p(document).scrollTop(),
                t = p(".sticky-header");
            a < e ? t.addClass("sticky") : t.removeClass("sticky"), "top" === t.attr("data-scroll-to") && (e < a ? t.addClass("sticky") : t.removeClass("sticky")), 0 === e ? (i.removeClass("sticky-header"), t.removeClass("sticky")) : i.addClass("sticky-header"), a = p(document).scrollTop()
        })
    }

    function v() {
        p(".xs-logo").each(function() {
            var e = p(this).children().clone(),
                t = p(".nav-brand");
            991 < p(window).width() ? 0 < t.children().length && t.children().remove() : 0 === t.children().length && t.append(e)
        })
    }

    function g() {
        var e = p(".bouble-slider-privew").outerHeight(!0),
            t = p(".bouble-slider-thumb .owl-stage-outer"),
            i = p(".bouble-slider-thumb .owl-stage-outer").outerWidth(!0),
            a = p(".bouble-slider-thumb .owl-stage");
        991 < p(window).width() && (t.css("height", e), a.css("width", i), a.css("height", e))
    }
    p.fn.myOwl = function(e) {
        var t = p.extend({
            items: 1,
            dots: !1,
            loop: !0,
            mouseDrag: !0,
            touchDrag: !0,
            nav: !1,
            autoplay: !0,
            navText: ["", ""],
            margin: 0,
            stagePadding: 0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            navRewind: !1,
            responsive: {},
            animateOut: "",
            animateIn: "",
            center: "",
            merge: "",
            autoWidth: ""
        }, e);
        return this.owlCarousel({
            items: t.items,
            loop: t.loop,
            mouseDrag: t.mouseDrag,
            touchDrag: t.touchDrag,
            nav: t.nav,
            navText: t.navText,
            dots: t.dots,
            margin: t.margin,
            stagePadding: t.stagePadding,
            autoplay: t.autoplay,
            autoplayTimeout: t.autoplayTimeout,
            autoplayHoverPause: t.autoplayHoverPause,
            animateOut: t.animateOut,
            animateIn: t.animateIn,
            responsive: t.responsive,
            navRewind: t.navRewind,
            center: t.center,
            merge: t.merge,
            autoWidth: t.autoWidth
        })
    }, p.fn.instaFeed = function(e) {
        var i = p.extend({
            token: "",
            $this: p(this),
            photos: 0
        }, e);
        p.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent",
            dataType: "jsonp",
            type: "GET",
            data: {
                access_token: i.token,
                count: i.photos
            },
            success: function(e) {
                for (var t in e.data) i.$this.append('<li><a href="' + e.data[t].link + '" ><img src="' + e.data[t].images.standard_resolution.url + '"></a></li>')
            },
            error: function(e) {
                console.log(e)
            }
        })
    }, p.fn.myGradientChart = function(e) {
        var o = p.extend({
            barColor: "",
            barColor1: "",
            barColor2: "",
            scaleColor: "transparent",
            trackColor: "#f7f7f7",
            lineCap: "square",
            size: 140,
            lineWidth: 8
        }, e);
        return this.easyPieChart({
            barColor: function(e) {
                var t = this.renderer.getCtx(),
                    i = this.renderer.getCanvas(),
                    a = t.createLinearGradient(0, 0, i.width, 0);
                return a.addColorStop(0, o.barColor1), a.addColorStop(1, o.barColor2), a
            },
            scaleColor: o.scaleColor,
            trackColor: o.trackColor,
            lineCap: o.lineCap,
            size: o.size,
            lineWidth: o.lineWidth
        })
    };
    var y = function() {
        var e = p(".xs-header");
        p(".xs-inner-banner .inner-banner").css("marginTop", e.outerHeight() / 2)
    };
    p.fn.scrollView = function() {
        return this.each(function() {
            p("html, body").animate({
                scrollTop: p(this).offset().top
            }, 1e3)
        })
    }, p.fn.goCurrentSection = function() {
        return this.on("click", function(e) {
            if ("" !== this.hash) {
                e.preventDefault();
                var t = this.hash;
                p("html, body").animate({
                    scrollTop: p(t).offset().top
                }, 1e3, function() {
                    window.location.hash = t
                })
            }
        })
    }, p.fn.mySelect = function(e) {
        var t = p(this),
            i = p(this).children("option");
        t.addClass("select-hidden"), t.wrap('<div class="select"></div>'), t.after('<div class="select-styled"></div>');
        var a = t.next(".select-styled");
        a.text(t.children("option").eq(0).text());
        for (var o = p("<ul />", {
                class: "select-options"
            }).insertAfter(a), n = 0; n < i.length; n++) p("<li />", {
            text: t.children("option").eq(n).text(),
            rel: t.children("option").eq(n).val()
        }).appendTo(o);
        var s = o.children("li");
        a.on("click", function(e) {
            e.stopPropagation(), p(".select-styled.active").not(this).each(function() {
                p(this).removeClass("active").next(".select-options").fadeIn()
            }), p(this).toggleClass("active").next(".select-options").toggle(), p(this).parent().toggleClass("focus")
        }), s.on("click", function(e) {
            e.stopPropagation(), a.text(p(this).text()).removeClass("active"), t.val(p(this).attr("rel")), o.hide(), p(this).parent().parent().hasClass("focus") && p(this).parent().parent().removeClass("focus")
        }), p(document).on("click", function() {
            a.removeClass("active"), o.hide()
        })
    }, p.fn.customNumber = function(e) {
        var t = p.extend({
            plusIcon: "",
            minusIcon: ""
        }, e);
        return this.append('<span class="add">' + t.plusIcon + "</span>"), this.append('<span class="sub">' + t.minusIcon + "</span>"), this.each(function() {
            var e = p(this),
                t = e.find('input[type="number"]');
            e.find(".add"), e.find(".sub"), t.parent().on("click", ".sub", function(e) {
                e.preventDefault(), t.val() > parseInt(t.attr("min"), 10) && t.val(function(e, t) {
                    return --t
                })
            }), t.parent().on("click", ".add", function(e) {
                e.preventDefault(), t.val() < parseInt(t.attr("max"), 10) && t.val(function(e, t) {
                    return ++t
                })
            })
        })
    }, p.fn.onScreen = function() {
        var e = this.offset(),
            t = (p(window), {
                top: p(window).scrollTop(),
                left: p(window).scrollLeft()
            });
        return t.right = t.left + p(window).width(), t.bottom = t.top + p(window).height(), e.right = e.left + this.outerWidth(), e.bottom = e.top + this.outerHeight(), !(t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom)
    }, p(window).on("load", function() {
        if (skrollr.init({
                forceHeight: !1,
                easings: {
                    easeOutBack: function(e, t) {
                        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
                    }
                },
                mobileCheck: function() {
                    return !1
                }
            }), m(), y(), h(), v(), g(), 0 < p(".cases-grid, .blog-grid").length) {
            var n = p(".cases-grid , .blog-grid"),
                e = function() {
                    var o, e = n.width(),
                        t = 1;
                    return 1200 < e ? t = 4 : 600 < e ? t = 3 : 450 < e ? t = 1 : 385 < e && (t = 1), o = Math.floor(e / t), n.find(".grid-item").each(function() {
                        var e = p(this),
                            t = e.attr("class").match(/grid-item-w(\d)/),
                            i = e.attr("class").match(/grid-item-h(\d)/),
                            a = t ? o * t[1] : o;
                        i && i[1], e.css({
                            width: a
                        })
                    }), o
                };
            (r = function() {
                n.isotope({
                    resizable: !1,
                    itemSelector: ".grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), p(".filter-button-wraper .option-set").find("a").on("click", function() {
                var e = p(this),
                    t = e.parents(".option-set");
                t.find(".selected").removeClass("selected"), e.addClass("selected");
                var i = {},
                    a = t.attr("data-option-key"),
                    o = e.attr("data-option-value");
                return o = "false" !== o && o, i[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(e, i) : n.isotope(i), !1
            })
        }
        if (0 < p(".portfolio-grid").length) {
            var i = p(".portfolio-grid");
            e = function() {
                var o, e = i.width(),
                    t = 1;
                return 1200 < e ? t = 4 : 900 < e ? t = 4 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), i.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                i.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r)
        }
        if (0 < p(".portfolio-grid-loadmore").length) {
            var t = function(e) {
                    a.find(".hidden").removeClass("hidden");
                    var t = s.filteredItems.slice(e, s.filteredItems.length).map(function(e) {
                        return e.element
                    });
                   // p(t).addClass("hidden"), a.isotope("layout"), 0 == t.length ? p("#load-more").fadeOut() : p("#load-more").fadeIn()
                },
                a = p(".portfolio-grid-loadmore");
            e = function() {
                var o, e = a.width(),
                    t = 1;
                return 1200 < e ? t = 4 : 900 < e ? t = 4 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), a.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                a.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r);
            var o = l = 5,
                s = a.data("isotope");
            t(l), a.after('<div class="text-center"><a href="#" id="load-more" class="loadmore-btn"><i class="icon icon-plus"></i> Load More</a></div>'), p("#load-more").click(function(e) {
                e.preventDefault(), p("#filters").data("clicked") ? (o = l, j$("#filters").data("clicked", !1)) : o = o, t(o += l)
            })
        }
        if (0 < p(".blog-grid-2").length && (n = p(".blog-grid-2"), e = function() {
                var o, e = n.width(),
                    t = 1;
                return 1200 < e ? t = 2 : 900 < e ? t = 2 : 600 < e ? t = 2 : 450 < e ? t = 1 : 385 < e && (t = 1), o = Math.floor(e / t), n.find(".grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/grid-item-w(\d)/),
                        i = e.attr("class").match(/grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                n.isotope({
                    resizable: !1,
                    itemSelector: ".grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), p(".filter-button-wraper .option-set").find("a").on("click", function() {
                var e = p(this),
                    t = e.parents(".option-set");
                t.find(".selected").removeClass("selected"), e.addClass("selected");
                var i = {},
                    a = t.attr("data-option-key"),
                    o = e.attr("data-option-value");
                return o = "false" !== o && o, i[a] = o, "layoutMode" === a && "function" == typeof changeLayoutMode ? changeLayoutMode(e, i) : n.isotope(i), !1
            })), 0 < p(".portfolio-grid-loadmore-2").length) {
            var r, l, d = function(e) {
                    c.find(".hidden").removeClass("hidden");
                    var t = s.filteredItems.slice(e, s.filteredItems.length).map(function(e) {
                        return e.element
                    });
                   // p(t).addClass("hidden"), c.isotope("layout"), 0 == t.length ? p("#load-more").fadeOut() : p("#load-more").fadeIn()
                },
                c = p(".portfolio-grid-loadmore-2");
            e = function() {
                var o, e = c.width(),
                    t = 1;
                return 1200 < e ? t = 3 : 900 < e ? t = 3 : 600 < e ? t = 2 : 450 < e ? t = 2 : 385 < e && (t = 1), o = Math.floor(e / t), c.find(".portfolio-grid-item").each(function() {
                    var e = p(this),
                        t = e.attr("class").match(/portfolio-grid-item-w(\d)/),
                        i = e.attr("class").match(/portfolio-grid-item-h(\d)/),
                        a = t ? o * t[1] : o;
                    i && i[1], e.css({
                        width: a
                    })
                }), o
            }, (r = function() {
                c.isotope({
                    resizable: !1,
                    itemSelector: ".portfolio-grid-item",
                    masonry: {
                        columnWidth: e(),
                        gutterWidth: 3
                    }
                })
            })(), p(window).on("resize", r), o = l = 6, s = c.data("isotope"), d(l), p("#load-more").click(function(e) {
                e.preventDefault(), p("#filters").data("clicked") ? (o = l, j$("#filters").data("clicked", !1)) : o = o, d(o += l)
            })
        }
        0 < p(".agency-portfolio-slider").length && p(".agency-portfolio-slider").myOwl({
            items: 5,
            nav: !1,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: !1
                },
                480: {
                    items: 1,
                    autoWidth: !1
                },
                768: {
                    items: 2,
                    autoWidth: !1
                },
                1024: {
                    items: 5,
                    autoWidth: !0
                }
            }
        })
    }), p(document).ready(function() {
        var e, t;
        m(), y(), t = ((e = p(".timeline").children()).length - 1) * e.outerHeight(), p(".timeline").append("<style>.timeline::before{height: " + t + "px}</style>"), e.last().css("paddingBottom", "0"), h(), v(), g(), 0 < p(".xs-menus").length && p(".xs-menus").xs_nav({
                mobileBreakpoint: 992
            }), 0 < p(".xs-hidden-menus").length && (p(".xs-hidden-menus").xs_nav({
                hidden: !0,
                offCanvasSide: "right"
            }), p(".offsetmenu-btn").click(function() {
                p(".xs-hidden-menus").data("xs_nav").toggleOffcanvas()
            })), p(document).on("submit", "#xs-contact-form", function(e) {
                e.preventDefault();
                var t, i = p("#xs_contact_name"),
                    a = p("#xs_contact_last_name"),
                    o = p("#xs_contact_number"),
                    n = p("#xs_contact_email"),
                    s = p("#xs_contact_subject"),
                    r = p("#x_contact_massage"),
                    l = p("#xs_contact_submit"),
                    d = !1;
                if (p(".xpeedStudio_success_message").remove(), 0 < i.length) {
                    if ("" === i.val().trim()) return i.addClass("invaild"), d = !0, i.focus(), !1;
                    i.removeClass("invaild")
                }
                if (0 < a.length) {
                    if ("" === a.val().trim()) return a.addClass("invaild"), d = !0, a.focus(), !1;
                    a.removeClass("invaild")
                }
                if (0 < o.length) {
                    if ("" === o.val().trim()) return o.addClass("invaild"), d = !0, o.focus(), !1;
                    o.removeClass("invaild")
                }
                if (0 < n.length) {
                    if ("" === n.val().trim()) return n.addClass("invaild"), d = !0, n.focus(), !1;
                    if (t = n.val().toLowerCase(), !/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)) return n.addClass("invaild"), d = !0, n.focus(), !1;
                    n.removeClass("invaild")
                }
                if (0 < s.length) {
                    if ("" === s.val().trim()) return s.addClass("invaild"), d = !0, s.focus(), !1;
                    s.removeClass("invaild")
                }
                if (0 < r.length) {
                    if ("" === r.val().trim()) return r.addClass("invaild"), d = !0, r.focus(), !1;
                    r.removeClass("invaild")
                }!1 === d && (l.before().hide().fadeIn(), p.ajax({
                    type: "POST",
                    url: "assets/php/contact-form.php",
                    data: {
                        xs_contact_name: i.val(),
                        xs_contact_last_name: a.val(),
                        xs_contact_number: o.val(),
                        xs_contact_email: n.val(),
                        xs_contact_subject: s.val(),
                        x_contact_massage: r.val()
                    },
                    success: function(e) {
                        l.after('<p class="xpeedStudio_success_message">' + e + "</p>").hide().fadeIn(), setTimeout(function() {
                            p(".xpeedStudio_success_message").fadeOut(1e3, function() {
                                p(this).remove()
                            })
                        }, 5e3), p("#xs-contact-form")[0].reset()
                    }
                }))
            }), 0 < p(".xs-video-popup").length && p(".xs-video-popup").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), 0 < p(".offset-side-bar").length && p(".offset-side-bar").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), p(".cart-group").addClass("isActive")
            }), 0 < p(".close-side-widget").length && p(".close-side-widget").on("click", function(e) {
                e.preventDefault(), p(".cart-group").removeClass("isActive")
            }), 0 < p(".navSidebar-button").length && p(".navSidebar-button").on("click", function(e) {
                e.preventDefault(), e.stopPropagation(), p(".info-group").addClass("isActive")
            }), 0 < p(".close-side-widget").length && p(".close-side-widget").on("click", function(e) {
                e.preventDefault(), p(".info-group").removeClass("isActive")
            }), p("body").on("click", function(e) {
                p(".info-group").removeClass("isActive"), p(".cart-group").removeClass("isActive")
            }), p(".xs-sidebar-widget").on("click", function(e) {
                e.stopPropagation()
            }), p("body").on("contextmenu", function(e) {
                return e.preventDefault(), e.stopPropagation(), !1
            }), p(document).on("keydown", function(e) {
                return !(e.ctrlKey && 85 == e.keyCode || e.ctrlKey && e.shiftKey && 73 == e.keyCode || e.ctrlKey && e.shiftKey && 75 == e.keyCode)
            }), 0 < p(".insta-feed").length && p(".insta-feed").instaFeed({
                token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                photos: 6
            }), 0 < p(".insta-feed2").length && p(".insta-feed2").instaFeed({
                token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                photos: 8
            }), 0 < p(".xs-modal-popup").length && p(".xs-modal-popup").magnificPopup({
                type: "inline",
                fixedContentPos: !1,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !1,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup"
                    }
                }
            }), 0 < p("img").length && p("img").each(function() {
                p(this).attr("draggable", "false"), p(this).on("mousedown", function(e) {
                    e.preventDefault && e.preventDefault()
                })
            }), 0 < p(".agency-office-slider").length && p(".agency-office-slider").myOwl({
                items: 3,
                autoWidth: !0,
                margin: 30,
                nav: !0,
                navText: ['<i class="icon icon-arrow-left" />', '<i class="icon icon-arrow-right" />'],
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: !1,
                        nav: !1,
                        margin: 0
                    },
                    480: {
                        items: 1,
                        autoWidth: !1,
                        nav: !1,
                        margin: 0
                    },
                    768: {
                        items: 2,
                        autoWidth: !1,
                        nav: !1
                    },
                    1024: {
                        items: 3,
                        autoWidth: !0,
                        nav: !0
                    }
                }
            }), 0 < p(".review-slider").length && p(".review-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-left-arrows"></i>', '<i class="icon icon-right-arrow"></i>'],
                dots: !0,
                responsive: {
                    0: {
                        nav: !1
                    },
                    480: {
                        nav: !1
                    },
                    768: {
                        nav: !1
                    },
                    1024: {
                        nav: !0
                    }
                }
            }), 0 < p(".client-slider").length && p(".client-slider").myOwl({
                items: 5,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: 5
                    }
                }
            }), 0 < p(".subscribe-form, .my-newsletter").length && p(".subscribe-form, .my-newsletter").ajaxChimp({
                url: "https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b"
            }), 0 < p(".agency-team-slider").length && p(".agency-team-slider").myOwl({
                items: 4,
                autoplay: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 4
                    }
                }
            }), p(".agency-single-team").hover(function() {
                p(this).parent().hasClass("hover") ? p(this).parent().removeClass("hover") : p(this).parent().addClass("hover")
            }),
            function() {
                for (var e = ["#b224ef", "#0369d1", "#ff4eb6"], t = ["#5055fa", "#00ecbc", "#ffcb6d"], i = p(".chart"), a = p(".chart-content"), o = 0; o < p(".single-piechart").length; o++) {
                    p(i[o]).myGradientChart({
                        barColor1: e[o],
                        barColor2: t[o]
                    });
                    var n = p(i[o]).attr("data-percent");
                    p(a[o]).append('<span class="gradient-title" style="background: linear-gradient(90deg, ' + e[o] + " 0%, " + t[o] + " 84%); color: " + e[o] + ';     -webkit-background-clip: text;">' + n + "%</span>")
                }
            }();
        var i = p(".number-percentage");
        0 < p(".waypoint-tigger").length && new Waypoint({
            element: document.getElementsByClassName("waypoint-tigger"),
            handler: function(e) {
                i.each(function() {
                    p(this).animateNumbers(p(this).attr("data-value"), !0, parseInt(p(this).attr("data-animation-duration"), 10));
                    var e = p(this).attr("data-value");
                    p(this).closest(".single-skill-bar").find(".skill-track").animate({
                        width: e + "%"
                    }, 3500)
                })
            },
            offset: "50%"
        }), p.fn.animateNumbers = function(i, a, o, n) {
            return this.each(function() {
                var e = p(this),
                    t = parseInt(e.text().replace(/,/g, ""), 10);
                a = void 0 === a || a, p({
                    value: t
                }).animate({
                    value: i
                }, {
                    duration: null == o ? 500 : o,
                    easing: null == n ? "swing" : n,
                    step: function() {
                        e.text(Math.floor(this.value)), a && e.text(e.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                    },
                    complete: function() {
                        parseInt(e.text(), 10) !== i && (e.text(i), a && e.text(e.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                    }
                })
            })
        }, p(function() {
            new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !1,
                live: !0,
                scrollContainer: null
            }).init()
        });
        var a, o = window.location.pathname,
            n = o.substr(o.lastIndexOf("/") + 1);
        if (p(".nav-menu li a").each(function(e, t) {
                var i = this.href.substr(this.href.lastIndexOf("/") + 1);
                n == i && (p([t]).addClass("active"), p([t]).parents().closest(".nav-submenu").parent("li") && p([t]).parents().closest(".nav-submenu").parent("li").addClass("active"), p([t]).parent().addClass("active"))
            }), 0 < p(".xs-image-popup").length && p(".xs-image-popup").magnificPopup({
                type: "image",
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
                    }
                },
                closeOnContentClick: !0,
                midClick: !0,
                gallery: {
                    enabled: !0
                }
            }), 0 < p(".post-gallery-slider").length && p(".post-gallery-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-left-arrows" />', '<i class="icon icon-right-arrow" />']
            }), p(".comment-reply-link").on("click", function(e) {
                e.preventDefault(), p("#comment-form").scrollView()
            }), 0 < p(".parallax-service").length && new Swiper(".parallax-service", {
                direction: "vertical",
                slidesPerView: 1,
                mousewheel: {
                    invert: !0,
                    releaseOnEdges: !0,
                    forceToAxis: !0
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }), 0 < p(".xs-select").length && p(".xs-select").mySelect(), 0 < p(".product-slider, .about-slider").length && p(".product-slider, .about-slider").myOwl({
                dots: !0,
                responsive: {
                    0: {
                        dots: !1
                    },
                    768: {
                        dots: !0
                    }
                }
            }), 0 < p(".custom_number").length && p(".custom_number").customNumber({
                plusIcon: '<i class="icon icon-up-arrow2"></i>',
                minusIcon: '<i class="icon icon-down-arrow2"></i>'
            }), 0 < p(".btn-floating").length && (p(".floating-icons-list").addClass("hidden"), p(".btn-floating").each(function() {
                p(this).on("click", function(e) {
                    e.preventDefault(), p(this).next().toggleClass("open"), p(this).next().toggleClass("hidden"), p(this).hasClass("active") ? p(this).removeClass("active") : p(this).addClass("active")
                })
            })), 0 < p(".rate-graph").length && p(".rate-graph").each(function() {
                p(this).find(".rate-graph-bar").attr("data-percent") <= 100 ? p(this).find(".rate-graph-bar").css({
                    width: p(this).find(".rate-graph-bar").attr("data-percent") + "%"
                }) : p(this).find(".rate-graph-bar").css({
                    width: "100%"
                })
            }), 0 < p(".banner-slider, .quote-slider").length && p(".banner-slider, .quote-slider").myOwl({
                nav: !0,
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
                responsive: {
                    0: {
                        nav: !1
                    },
                    768: {
                        nav: !0
                    }
                }
            }), 0 < p(".scrollto-button").length && p(".scrollto-button").goCurrentSection(), 0 < p(".review-slider-preview").length && 0 < p(".review-slider-thumb").length) {
            var s = p(".review-slider-preview"),
                r = p(".review-slider-thumb"),
                l = 5,
                d = !0;
            s.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !1,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200
            }).on("changed.owl.carousel", function(e) {
                var t = e.item.count - 1,
                    i = Math.round(e.item.index - e.item.count / 2 - .5);
                i < 0 && (i = t), t < i && (i = 0), r.find(".owl-item").removeClass("current").eq(i).addClass("current");
                var a = r.find(".owl-item.active").length - 1,
                    o = r.find(".owl-item.active").first().index();
                r.find(".owl-item.active").last().index() < i && r.data("owl.carousel").to(i, 100, !0), i < o && r.data("owl.carousel").to(i - a, 100, !0)
            }), r.on("initialized.owl.carousel", function() {
                r.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: l,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: l,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: l
                    }
                }
            }).on("changed.owl.carousel", function(e) {
                if (d) {
                    var t = e.item.index;
                    s.data("owl.carousel").to(t, 100, !0)
                }
            }), r.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = p(this).index();
                s.data("owl.carousel").to(t, 300, !0)
            })
        }
        if (0 < p(".bouble-slider-privew").length && 0 < p(".bouble-slider-thumb").length && (s = p(".bouble-slider-privew"), r = p(".bouble-slider-thumb"), l = 5, d = !0, s.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                mouseDrag: !1,
                touchDrag: !1,
                responsiveRefreshRate: 200,
                responsive: {
                    0: {
                        touchDrag: !0
                    },
                    768: {
                        touchDrag: !0
                    },
                    1024: {
                        touchDrag: !1
                    }
                },
                navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>']
            }).on("changed.owl.carousel", function(e) {
                var t = e.item.count - 1,
                    i = Math.round(e.item.index - e.item.count / 2 - .5);
                i < 0 && (i = t), t < i && (i = 0), r.find(".owl-item").removeClass("current").eq(i).addClass("current");
                var a = r.find(".owl-item.active").length - 1,
                    o = r.find(".owl-item.active").first().index();
                r.find(".owl-item.active").last().index() < i && r.data("owl.carousel").to(i, 100, !0), i < o && r.data("owl.carousel").to(i - a, 100, !0)
            }), r.on("initialized.owl.carousel", function() {
                r.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: l,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                autoWidth: !0,
                mouseDrag: !1,
                touchDrag: !1,
                slideBy: l,
                responsiveRefreshRate: 100
            }).on("changed.owl.carousel", function(e) {
                if (d) {
                    var t = e.item.index;
                    s.data("owl.carousel").to(t, 100, !0)
                }
            }), r.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = p(this).index();
                s.data("owl.carousel").to(t, 300, !0)
            })), 0 < p(".single-page-menu li a").length && (p(".single-page-menu li a").on("click", function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                    var e = p(this.hash);
                    if ((e = e.length ? e : p("[name=" + this.hash.slice(1) + "]")).length) return p("html,body").animate({
                        scrollTop: e.offset().top
                    }, 1e3), !1
                }
            }), p(".single-page-menu li a").on("click", function() {
                var e = p(".nav-overlay-panel"),
                    t = p(".nav-menus-wrapper");
                t.hasClass("nav-menus-wrapper-open") && t.removeClass("nav-menus-wrapper-open"), "block" === e.css("display") && e.css("display", "none"), p(".offcanvas-menu-wraper").hasClass("active") && p(".offcanvas-menu-wraper").removeClass("active"), p(".fullscreen_menu_tigger").hasClass("open") && p(".fullscreen_menu_tigger").removeClass("open"), p(".off-canvas-menu-area").hasClass("nav-is-open") && p(".off-canvas-menu-area").removeClass("nav-is-open")
            })), 0 < p(".typed").length && new Typed(".typed", {
                strings: ["busy", "laziness"],
                typeSpeed: 40,
                loop: !0,
                backSpeed: 40,
                backDelay: 500,
                startDelay: 1e3
            }), 0 < p(".input-material").length) {
            for (var c = p(".input-material .form-control"), u = 0; u < c.length; u++) p(c[u]).wrap('<div class="form-group"></div>'), p(c[u]).after('<span class="bar"></span>');
            p(c).each(function(e, t) {
                var i = p(t).attr("placeholder");
                p(t).after('<span class="placeholder-title">' + i + "</span>"), p(t).removeAttr("placeholder")
            }), p(c).on("blur", function(e) {
                p(this).val() ? p(this).addClass("active") : p(this).removeClass("active")
            })
        }
        if (0 < p("#cal_to_action_animation").length && p("#cal_to_action_animation").parallax(), 0 < p(".xs-map-popup").length && p(".xs-map-popup").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), new Swiper(".vertical-slider", {
                direction: "vertical",
                loop: !1,
                mousewheel: !1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }), p("body").on("click", ".fullscreen_menu_tigger", function(e) {
                e.preventDefault(), p(this).toggleClass("open"), p(".offcanvas-menu-wraper").toggleClass("active"), p(".off-canvas-menu-area").toggleClass("nav-is-open")
            }), p(".off-canvas-menu-area").append('<div class="menu-overlay"></div>'), p(".offcanvas-menu .inner-submenu").prev("a").hasClass("tigger") ? p(".offcanvas-menu .inner-submenu").prev().removeClass("tigger") : p(".offcanvas-menu .inner-submenu").prev().addClass("tigger"), p(".offcanvas-menu li .tigger").on("click", function(e) {
                e.preventDefault(), p(this).next().hasClass("show") ? (p(this).next().removeClass("show"), p(this).next().slideUp(500), p(this).removeClass("active")) : (p(this).next().addClass("show"), p(this).parent().parent().find(".offcanvas-menu li ul").removeClass("show"), p(this).parent().parent().find(".offcanvas-menu li ul").slideUp(400), p(this).next().slideToggle(500), p(this).addClass("active"))
            }), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_8_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_8_1") : a("#rev_slider_8_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        viewPort: {
                            enable: !0,
                            outof: "wait",
                            visible_area: "100%",
                            presize: !1
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_15_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_15_1") : a("#rev_slider_15_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        viewPort: {
                            enable: !0,
                            outof: "wait",
                            visible_area: "100%",
                            presize: !1
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), function() {
                function e() {
                    void 0 === a && (a = jQuery), null == a("#rev_slider_16_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_16_1") : a("#rev_slider_16_1").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9e3,
                        navigation: {},
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "enterpoint",
                            speed: 400,
                            speedbg: 0,
                            speedls: 0,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "spinner0",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: !1,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: !1
                        }
                    })
                }
                /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
            }(), 0 < p(".service-boxed").length && (p(".service-boxed").on("mouseenter", function() {
                p(this).hasClass("active") || p(this).addClass("active")
            }), p(".service-boxed").on("mouseleave", function(e) {
                p(this).hasClass("active") && p(this).removeClass("active")
            })), 0 < p(".portfolio-testimonial-slider").length) {
            var f = p(".portfolio-testimonial-slider");
            f.myOwl({
                loop: !1,
                dots: !0,
                animateIn: "fadeIn",
                animateOut: "fadeOut"
            }), f.on("mousewheel", ".owl-stage", function(e) {
                0 < e.deltaY ? f.trigger("next.owl") : f.trigger("prev.owl"), e.preventDefault()
            })
        }
        p(document).on("click", ".backtotop", function(e) {
            e.preventDefault(), p("body, html").stop().animate({
                scrollTop: 0
            }, 1e3)
        })
    }), p(window).on("scroll", function() {
        p(".shuffle-letter-title-wraper").each(function(e) {
            p(this).onScreen() && !p(this).hasClass("shuffle-title") && setTimeout(function() {
                p(this).find(".shuufle-letter-title").shuffleLetters(), p(this).addClass("shuffle-title")
            }.bind(this), 400)
        })
    }), p(window).on("resize", function() {
        y(), v(), g()
    }), 0 < p("#xs-map").length && google.maps.event.addDomListener(window, "load", function() {
        var e = {
                zoom: 11,
                center: new google.maps.LatLng(40.67, -73.94),
                styles: [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e9e9e9"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 21
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dedede"
                    }, {
                        lightness: 21
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#333333"
                    }, {
                        lightness: 40
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f2f2f2"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }]
            },
            t = document.getElementById("xs-map"),
            i = new google.maps.Map(t, e);
        new google.maps.Marker({
            position: new google.maps.LatLng(40.67, -73.94),
            icon: "assets/images/map-marker.png",
            map: i,
            title: "Agencyfi!"
        })
    })
}(jQuery);