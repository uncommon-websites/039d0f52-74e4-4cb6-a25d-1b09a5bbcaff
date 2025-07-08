/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Contact us",
	href: "tel:+4930887891"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Retirement Investment",
				href: "/use-cases/retirement-investment",
				image: "/generated/image-a-homeowner-sitting-at-a-wooden-table-su.webp",
				description: "Property owners shouldn't have to become professionals in rental, marketing, and administration just to prepare for retirement. We handle all operational complexities while you focus on your investment strategy.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Tenant Acquisition",
				href: "/use-cases/tenant-acquisition",
				image: "/generated/image-a-diverse-team-of-property-maintenance-w.webp",
				description: "Professional tenant acquisition services including property photography, listings on ImmobilienScout24 and Immowelt, viewings coordination, identity verification, and complete contract processing.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Legal Compliance",
				href: "/use-cases/legal-compliance",
				image: "/generated/image-a-joyful-family-of-four-including-parent.webp",
				description: "Licensed property management services under § 34c Abs. 1 GewO, supervised by Bezirksamt Mitte von Berlin, ensuring full legal compliance for your rental property investments.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
