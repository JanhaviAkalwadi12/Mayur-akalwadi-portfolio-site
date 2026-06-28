import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden grain-bg",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl animate-float-slow" }), /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.14),transparent_70%)] blur-2xl animate-float-slow",
				style: { animationDelay: "1.5s" }
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("a", {
					href: "https://kreosoftwares.in",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-2 glass-gold rounded-full px-3.5 py-1.5 text-xs tracking-wide text-silver/90",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-gold" })]
						}),
						"Currently: Business Development Manager at",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gold font-semibold underline-offset-2 hover:underline",
							children: "KREO"
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "↗"
						})
					]
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ jsxs("h1", {
						className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "Mayur"
							}),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Akalwadi"
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-base sm:text-lg text-silver/80 font-medium",
						children: [
							"Business Development Manager",
							/* @__PURE__ */ jsx("span", {
								className: "mx-2 text-gold/70",
								children: "|"
							}),
							"Senior Business Analyst"
						]
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 260,
					children: /* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xl text-lg text-silver/75 leading-relaxed",
						children: "Bridging the gap between complex industrial product architecture and enterprise-scale efficiency."
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 340,
					children: /* @__PURE__ */ jsx("div", {
						className: "mt-7 flex flex-wrap gap-2.5",
						children: [
							"8+ Years of Experience",
							"Bengaluru · Flexible to Relocate",
							"ERP Transformation Specialist"
						].map((b) => /* @__PURE__ */ jsx("span", {
							className: "glass rounded-full px-3.5 py-1.5 text-xs text-silver/85 gold-border",
							children: b
						}, b))
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 440,
					children: /* @__PURE__ */ jsxs("div", {
						className: "mt-9 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ jsx(MagneticButton, {
							onClick: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
							className: "btn-gold rounded-full px-7 py-3.5 text-sm",
							children: "Let's Connect"
						}), /* @__PURE__ */ jsx(MagneticButton, {
							onClick: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
							className: "btn-ghost-gold rounded-full px-7 py-3.5 text-sm",
							strength: .2,
							children: "View Portfolio"
						})]
					})
				})
			] }), /* @__PURE__ */ jsx(Reveal, {
				delay: 250,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-md lg:max-w-none",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-[var(--gradient-gold)] opacity-20 blur-2xl rounded-3xl" }), /* @__PURE__ */ jsxs("div", {
						className: "relative glass-gold rounded-3xl overflow-hidden p-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "relative rounded-2xl overflow-hidden",
								children: [/* @__PURE__ */ jsx("img", {
									src: portraitAsset.url,
									alt: "Portrait of Mayur Akalwadi",
									className: "w-full h-auto object-cover aspect-[3/4]",
									loading: "eager"
								}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 gold-border animate-float-slow",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] uppercase tracking-[0.18em] text-gold/90",
									children: "Specialty"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: "SAP MM · WM · EWM"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute -top-4 -right-3 glass rounded-2xl px-4 py-3 gold-border animate-float-slow",
								style: { animationDelay: "1s" },
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] uppercase tracking-[0.18em] text-gold/90",
									children: "Impact"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: "+20% efficiency"
								})]
							})
						]
					})]
				})
			})]
		})]
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
						children: "— About"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-3xl md:text-5xl font-bold leading-tight",
						children: [
							"An executive operator at the intersection of",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "design, data and delivery."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-silver/80 text-lg leading-relaxed",
						children: "8 years of proven expertise driving growth at the intersection of industrial product design, enterprise resource planning, supply chain logistics, and business transformation."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 glass-gold rounded-2xl p-5 max-w-md",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-[11px] uppercase tracking-[0.2em] text-gold/90",
							children: "Alumnus"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 font-semibold",
							children: "M.S. Ramaiah University of Applied Sciences"
						})]
					})
				]
			}) }), /* @__PURE__ */ jsx(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ jsx("ol", {
					className: "relative border-l border-gold/30 pl-8 space-y-7",
					children: [
						{
							year: "2024 — Present",
							title: "Business Development Manager",
							org: "KREO Softwares"
						},
						{
							year: "2022 — 2024",
							title: "Business Analyst",
							org: "SAP Labs"
						},
						{
							year: "2020 — 2022",
							title: "SAP MM Consultant",
							org: "Capgemini"
						},
						{
							year: "2018 — 2020",
							title: "SAP ERP Consultant",
							org: "Tata Consultancy Services (TCS)"
						},
						{
							year: "2017 — 2018",
							title: "Industrial Product Designer & PLM",
							org: "Manufacturing Sector"
						}
					].map((t) => /* @__PURE__ */ jsxs("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("span", { className: "absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_0_4px_rgba(212,175,55,0.15)]" }),
							/* @__PURE__ */ jsx("div", {
								className: "text-[11px] uppercase tracking-[0.22em] text-gold/80",
								children: t.year
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-1 font-display text-lg font-semibold text-foreground",
								children: t.title
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm text-silver/70",
								children: t.org
							})
						]
					}, t.year))
				})
			})]
		})
	});
}
function Expertise() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
					children: "— Core Expertise"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
					children: ["Three pillars. ", /* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "One transformation playbook."
					})]
				})] }),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid md:grid-cols-3 gap-5",
					children: [
						{
							title: "ERP & Supply Chain",
							span: "md:col-span-2",
							items: [
								"SAP Material Management (MM)",
								"SAP Warehouse Management (WM)",
								"SAP Extended Warehouse Management (EWM)"
							],
							glyph: "◆"
						},
						{
							title: "Business Intelligence",
							items: [
								"Business Analysis",
								"Process Mapping",
								"Requirement Gathering",
								"ERP Consulting"
							],
							glyph: "◇"
						},
						{
							title: "Engineering & Innovation",
							items: [
								"Industrial Product Design",
								"Product Analysis",
								"Product Lifecycle Management"
							],
							glyph: "✦"
						}
					].map((c, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 100,
						className: c.span ?? "",
						children: /* @__PURE__ */ jsx(TiltCard, {
							className: "h-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "glass-gold rounded-3xl p-7 h-full flex flex-col",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-gold text-2xl",
											children: c.glyph
										}), /* @__PURE__ */ jsxs("div", {
											className: "text-[10px] uppercase tracking-[0.25em] text-silver/50",
											children: ["0", i + 1]
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-5 font-display text-xl font-semibold",
										children: c.title
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "mt-5 space-y-2.5",
										children: c.items.map((it) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-3 text-sm text-silver/85",
											children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)]" }), it]
										}, it))
									})
								]
							})
						})
					}, c.title))
				}),
				/* @__PURE__ */ jsx(StackToggle, {})
			]
		})
	});
}
function StackToggle() {
	const [view, setView] = useState("domain");
	const items = view === "domain" ? [
		"Business Analysis",
		"Supply Chain",
		"ERP Transformation",
		"Product Strategy"
	] : [
		"SAP MM (Material Management)",
		"SAP WM (Warehouse Management)",
		"SAP EWM (Extended Warehouse Management)",
		"SAP TM (Transportation Management)",
		"SAP APO (Advanced Planning & Optimization)",
		"SAP IBP (Integrated Business Planning)",
		"SAP Ariba (Procurement & Supplier Collaboration)",
		"PLM",
		"ERP Systems"
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-16",
		children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-2",
				children: "— View By"
			}), /* @__PURE__ */ jsx("h3", {
				className: "font-display text-2xl md:text-3xl font-semibold",
				children: "Tech Stack"
			})] }), /* @__PURE__ */ jsx("div", {
				className: "glass rounded-full p-1 gold-border flex",
				children: ["domain", "tools"].map((k) => /* @__PURE__ */ jsxs("button", {
					onClick: () => setView(k),
					className: `relative px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${view === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"}`,
					children: [view === k && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[var(--gradient-gold)]" }), /* @__PURE__ */ jsx("span", {
						className: "relative",
						children: k === "domain" ? "Domain Expertise" : "Tools"
					})]
				}, k))
			})]
		}) }), /* @__PURE__ */ jsx("div", {
			className: "mt-7 flex flex-wrap gap-3",
			children: items.map((it, i) => /* @__PURE__ */ jsx("div", {
				className: "glass rounded-2xl px-5 py-3 text-sm gold-border animate-reveal-up",
				style: { animationDelay: `${i * 60}ms` },
				children: it
			}, it))
		})]
	});
}
function Metrics() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative py-20 md:py-28",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "glass-gold rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 md:gap-4",
				children: [
					{
						n: 8,
						suffix: "+",
						label: "Years Enterprise Experience"
					},
					{
						n: 100,
						suffix: "%",
						label: "Architecture Alignment"
					},
					{
						n: 20,
						suffix: "%",
						label: "Average Efficiency Increase"
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ jsxs("div", {
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-6xl md:text-7xl leading-none",
							children: /* @__PURE__ */ jsx(Counter, {
								to: s.n,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-3 text-sm text-silver/75 uppercase tracking-[0.2em]",
							children: s.label
						})]
					})
				}, s.label))
			})
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Services"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["Engagements built for ", /* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "enterprise outcomes."
				})]
			})] }), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid md:grid-cols-2 gap-5",
				children: [
					{
						t: "ERP & Supply Chain Transformation Consulting",
						d: "End-to-end SAP MM/WM/EWM rollouts, process redesign and adoption.",
						g: "◆"
					},
					{
						t: "End-to-End Business Analysis & Strategy",
						d: "From discovery and requirement gathering to roadmap and KPIs.",
						g: "✦"
					},
					{
						t: "Industrial Product Design Validation & Optimization",
						d: "PLM alignment, BOM accuracy, manufacturability and lifecycle gating.",
						g: "◇"
					},
					{
						t: "Market Growth & Business Development Management",
						d: "Pipeline architecture, enterprise GTM and strategic partnerships.",
						g: "❖"
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ jsx(TiltCard, { children: /* @__PURE__ */ jsxs("div", {
						className: "glass rounded-3xl p-7 gold-border group relative overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-gold text-3xl",
									children: s.g
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-[10px] uppercase tracking-[0.25em] text-silver/40",
									children: ["Service · 0", i + 1]
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-xl font-semibold leading-snug",
								children: s.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-silver/75 leading-relaxed",
								children: s.d
							})
						]
					}) })
				}, s.t))
			})]
		})
	});
}
var PROJECTS = [
	{
		title: "AI-Driven Omni-Channel Fulfillment",
		tag: "SAP EWM",
		short: "Warehouse optimization engine using real-time demand data to dynamically update storage locations.",
		span: "md:col-span-2",
		problem: "Manual storage allocation and static slotting created excessive travel time and labor overhead across high-velocity SKUs in omni-channel warehouses.",
		solution: [
			"Automated wave management aligned to fulfillment SLAs",
			"Cross-docking coordination for inbound-outbound flow",
			"Dynamic bin assignment driven by live demand signals",
			"High-turnover item optimization with velocity-based zoning"
		],
		impact: "Reduced warehouse travel time and labor overhead by up to 20%, lifting on-time fulfillment across DTC and B2B channels."
	},
	{
		title: "Multi-Echelon Inventory Optimization",
		tag: "SAP MM",
		short: "Enterprise supply chain engine automating multi-location procurement.",
		problem: "Disconnected regional planning teams caused simultaneous stockouts and excess working capital tied up in safety stock.",
		solution: [
			"Automated Purchase Requisition triggers across nodes",
			"Safety stock optimization tuned by demand variability",
			"Vendor quota optimization with performance weighting",
			"Automated source determination for fastest fulfillment"
		],
		impact: "Prevented stockouts on critical SKUs while reducing excess inventory investment and freeing working capital."
	},
	{
		title: "Smart Product Lifecycle & Traceability Network",
		tag: "PLM → ERP",
		short: "Centralized platform connecting industrial CAD designs with SAP production systems.",
		problem: "Engineering and ERP operated in silos — CAD revisions, BOM updates and batch records were reconciled manually, slowing launches and introducing errors.",
		solution: [
			"Engineering Change Management workflows across PLM/ERP",
			"Batch traceability from raw material to finished good",
			"CAD-to-BOM synchronization with rev control"
		],
		impact: "Reduced engineering data errors and accelerated product launch cycles with full traceability for audits."
	}
];
function Projects() {
	const [open, setOpen] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "relative py-24 md:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Case Studies"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["Selected engagements ", /* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "at enterprise scale."
				})]
			})] }), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid md:grid-cols-3 gap-5",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 100,
					className: p.span ?? "",
					children: /* @__PURE__ */ jsx(TiltCard, { children: /* @__PURE__ */ jsxs("button", {
						onClick: () => setOpen(p),
						className: "text-left w-full glass-gold rounded-3xl p-7 h-full group relative overflow-hidden",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" }), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
										children: p.tag
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-silver/40 text-xs",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 font-display text-2xl font-semibold leading-tight",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-silver/75 leading-relaxed",
									children: p.short
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 inline-flex items-center gap-2 text-sm text-gold",
									children: ["Open case study ", /* @__PURE__ */ jsx("span", {
										"aria-hidden": true,
										children: "→"
									})]
								})
							]
						})]
					}) })
				}, p.title))
			})]
		}), open && /* @__PURE__ */ jsx(ProjectModal, {
			project: open,
			onClose: () => setOpen(null)
		})]
	});
}
function ProjectModal({ project, onClose }) {
	const [tab, setTab] = useState("problem");
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-reveal-up",
		onClick: onClose,
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-md" }), /* @__PURE__ */ jsxs("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-3xl glass-gold rounded-3xl p-7 md:p-10 max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "absolute top-4 right-4 h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/5",
					children: "✕"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
					children: project.tag
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-4 font-display text-2xl md:text-3xl font-bold leading-tight",
					children: project.title
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 inline-flex glass rounded-full p-1 gold-border",
					children: [
						"problem",
						"solution",
						"impact"
					].map((k) => /* @__PURE__ */ jsxs("button", {
						onClick: () => setTab(k),
						className: `relative px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${tab === k ? "text-[var(--background)]" : "text-silver/80 hover:text-foreground"}`,
						children: [tab === k && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[var(--gradient-gold)]" }), /* @__PURE__ */ jsx("span", {
							className: "relative",
							children: k === "problem" ? "Problem" : k === "solution" ? "ERP Solution" : "Business Impact"
						})]
					}, k))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 text-silver/85 leading-relaxed",
					children: [
						tab === "problem" && /* @__PURE__ */ jsx("p", { children: project.problem }),
						tab === "solution" && /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: project.solution.map((s) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gradient-gold)] shrink-0" }), /* @__PURE__ */ jsx("span", { children: s })]
							}, s))
						}),
						tab === "impact" && /* @__PURE__ */ jsx("p", {
							className: "text-lg",
							children: project.impact
						})
					]
				})
			]
		})]
	});
}
function ArchitectureMap() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative py-24 md:py-32 grain-bg",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
				children: "— Architecture Map"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "font-display text-3xl md:text-5xl font-bold max-w-3xl",
				children: ["From CAD to ", /* @__PURE__ */ jsx("span", {
					className: "text-gold",
					children: "market scale."
				})]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 relative",
				children: [/* @__PURE__ */ jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" }), /* @__PURE__ */ jsx("ol", {
					className: "space-y-6 md:space-y-10",
					children: [
						{
							title: "Industrial Design",
							desc: "CAD, validation, manufacturability"
						},
						{
							title: "Product Lifecycle Management",
							desc: "BOM, ECM, revision control"
						},
						{
							title: "ERP Integration",
							desc: "SAP MM · WM · EWM"
						},
						{
							title: "Supply Chain Optimization",
							desc: "Multi-echelon, vendor quotas"
						},
						{
							title: "Business Growth",
							desc: "GTM, partnerships, scale"
						}
					].map((n, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs("li", {
							className: `md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: `${i % 2 === 1 ? "md:text-left" : "md:text-right"}`,
								children: /* @__PURE__ */ jsxs("div", {
									className: "glass-gold rounded-2xl p-6 inline-block max-w-md hover:translate-y-[-2px] transition-transform",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "text-[11px] uppercase tracking-[0.22em] text-gold/85",
											children: ["Stage 0", i + 1]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-1 font-display text-xl font-semibold",
											children: n.title
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-2 text-sm text-silver/75",
											children: n.desc
										})
									]
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "hidden md:flex justify-center",
								children: /* @__PURE__ */ jsxs("span", {
									className: "relative inline-flex h-4 w-4",
									children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gold animate-pulse-gold" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-4 w-4 rounded-full bg-[var(--gradient-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)]" })]
								})
							})]
						})
					}, n.title))
				})]
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs uppercase tracking-[0.3em] text-gold/80 mb-4",
					children: "— Contact"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-5xl font-bold leading-tight",
					children: ["Let's design your ", /* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "next transformation."
					})]
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "mt-10 glass-gold rounded-3xl p-7 md:p-8 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Name",
								name: "name"
							}), /* @__PURE__ */ jsx(Field, {
								label: "Email",
								name: "email",
								type: "email"
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Company",
							name: "company"
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Message",
							name: "message",
							textarea: true
						}),
						/* @__PURE__ */ jsx(MagneticButton, {
							type: "submit",
							className: "btn-gold rounded-full px-7 py-3.5 text-sm",
							children: sent ? "✓ Sent — Thank you" : "Start Project"
						})
					]
				})
			] }), /* @__PURE__ */ jsx(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 lg:pt-20",
					children: [
						/* @__PURE__ */ jsx(ContactRow, {
							label: "Phone",
							value: "+91 99804 11129",
							href: "tel:+919980411129"
						}),
						/* @__PURE__ */ jsx(ContactRow, {
							label: "Email",
							value: "akalwadi1103@gmail.com",
							href: "mailto:akalwadi1103@gmail.com"
						}),
						/* @__PURE__ */ jsx(ContactRow, {
							label: "Location",
							value: "Bengaluru, India"
						}),
						/* @__PURE__ */ jsx(ContactRow, {
							label: "Open To",
							value: "Global · Hybrid Opportunities"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, type = "text", textarea = false }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[11px] uppercase tracking-[0.2em] text-silver/70",
			children: label
		}), textarea ? /* @__PURE__ */ jsx("textarea", {
			name,
			rows: 4,
			className: "mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors",
			placeholder: `Your ${label.toLowerCase()}...`
		}) : /* @__PURE__ */ jsx("input", {
			name,
			type,
			className: "mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-gold/60 focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-silver/40 transition-colors",
			placeholder: `Your ${label.toLowerCase()}`
		})]
	});
}
function ContactRow({ label, value, href }) {
	const Inner = /* @__PURE__ */ jsxs("div", {
		className: "glass rounded-2xl p-5 gold-border flex items-center justify-between hover:bg-white/[0.04] transition-colors",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "text-[10px] uppercase tracking-[0.25em] text-gold/85",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 font-medium text-foreground",
			children: value
		})] }), href && /* @__PURE__ */ jsx("span", {
			className: "text-gold text-xl",
			children: "↗"
		})]
	});
	return href ? /* @__PURE__ */ jsx("a", {
		href,
		children: Inner
	}) : Inner;
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "relative pt-16 pb-10 border-t border-white/5",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "font-display text-2xl font-bold",
					children: ["Mayur ", /* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: "Akalwadi"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-silver/70 max-w-sm",
					children: "Bridging complex industrial product architecture with enterprise-scale efficiency."
				})] }), /* @__PURE__ */ jsxs("nav", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-[11px] uppercase tracking-[0.22em] text-gold/85 mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ jsx("ul", {
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: [
						"About",
						"Skills",
						"Projects",
						"Services",
						"Contact"
					].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${l.toLowerCase()}`,
						className: "text-sm text-silver/80 hover:text-gold transition-colors",
						children: l
					}) }, l))
				})] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-silver/55",
				children: [/* @__PURE__ */ jsx("div", { children: "© 2026 Mayur Akalwadi. All Rights Reserved." }), /* @__PURE__ */ jsx("div", { children: "Crafted with precision · Bengaluru, India" })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Expertise, {}),
			/* @__PURE__ */ jsx(Metrics, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(ArchitectureMap, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
