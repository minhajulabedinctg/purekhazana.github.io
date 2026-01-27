const WHATSAPP_NUMBER = "8801309476030";

const products = [
  {
    id: "ghee-1kg",
    title: "Pure Ghee 1 KG",
    desc: "প্রিমিয়াম কোয়ালিটির অর্গানিক ঘি।",
    price: 1650,
    compareAt: null,
    img: "assets/images/ghee-1kg.jpg",
    featured: true,
    bestSellingRank: 1,
    date: "2026-01-01"
  },
  {
    id: "ghee-500gm",
    title: "Pure Ghee 500 gm",
    desc: "দৈনন্দিন ব্যবহারের জন্য পারফেক্ট প্যাক।",
    price: 825,
    compareAt: null,
    img: "assets/images/ghee-500gm.jpg",
    featured: true,
    bestSellingRank: 2,
    date: "2026-01-02"
  },
  {
    id: "ghee-250gm",
    title: "Pure Ghee 250 gm",
    desc: "ছোট পরিবারের জন্য সুবিধাজনক সাইজ।",
    price: 412,
    compareAt: null,
    img: "assets/images/ghee-250gm.jpg",
    featured: false,
    bestSellingRank: 3,
    date: "2026-01-03"
  },
  {
    id: "honey",
    title: "Pure Honey",
    desc: "বিশ্বস্ত উৎস থেকে সংগ্রহকৃত খাঁটি মধু।",
    price: 0,
    compareAt: null,
    img: "assets/images/honey.jpg",
    featured: false,
    bestSellingRank: 10,
    date: "2026-01-04"
  },
  {
    id: "mustard-oil",
    title: "Pure Mustard Oil",
    desc: "ঐতিহ্যবাহী পদ্ধতিতে প্রস্তুত খাঁটি সরিষার তেল।",
    price: 0,
    compareAt: null,
    img: "assets/images/mustard-oil.jpg",
    featured: false,
    bestSellingRank: 11,
    date: "2026-01-05"
  }
];

function waLink(p) {
  const priceText = p.price ? `Price: ৳${p.price}` : "Price: ইনবক্স করুন";
  const msg = `আমি ${p.title} অর্ডার করতে চাই। ${priceText}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function formatBDT(n) {
  if (!n) return "ইনবক্স করুন";
  return `৳ ${n}`;
}

function render(list) {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("emptyState");
  grid.innerHTML = "";

  if (!list.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  for (const p of list) {
    const cardWrap = document.createElement("div");
    cardWrap.className = "card-wrap";

    if (p.featured) {
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = "Featured";
      cardWrap.appendChild(badge);
    }

    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="media">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
      </div>
      <div class="body">
        <h3 class="title">${p.title}</h3>
        <div class="price-line">
          Regular price <span class="price-strong">${formatBDT(p.price)}</span>
          ${p.compareAt ? `<span class="compare">৳ ${p.compareAt}</span>` : ""}
        </div>
        <p class="desc">${p.desc}</p>
        <a class="btn" href="${waLink(p)}" target="_blank" rel="noopener">অর্ডার করুন</a>
      </div>
    `;

    cardWrap.appendChild(card);
    grid.appendChild(cardWrap);
  }
}

function sortProducts(list, mode) {
  const arr = [...list];

  switch (mode) {
    case "featured":
      return arr.sort((a,b) => (b.featured === true) - (a.featured === true));
    case "bestselling":
      return arr.sort((a,b) => (a.bestSellingRank || 999) - (b.bestSellingRank || 999));
    case "az":
      return arr.sort((a,b) => a.title.localeCompare(b.title));
    case "za":
      return arr.sort((a,b) => b.title.localeCompare(a.title));
    case "priceLow":
      return arr.sort((a,b) => (a.price || 0) - (b.price || 0));
    case "priceHigh":
      return arr.sort((a,b) => (b.price || 0) - (a.price || 0));
    case "dateOld":
      return arr.sort((a,b) => new Date(a.date) - new Date(b.date));
    case "dateNew":
      return arr.sort((a,b) => new Date(b.date) - new Date(a.date));
    default:
      return arr;
  }
}

function apply() {
  const q = (document.getElementById("searchInput").value || "").trim().toLowerCase();
  const mode = document.getElementById("sortSelect").value;

  const filtered = products.filter(p => {
    const hay = `${p.title} ${p.desc}`.toLowerCase();
    return hay.includes(q);
  });

  render(sortProducts(filtered, mode));
}

/* Mobile menu toggle (optional simple) */
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

/* Initial render + listeners */
document.getElementById("searchInput").addEventListener("input", apply);
document.getElementById("sortSelect").addEventListener("change", apply);
apply();
