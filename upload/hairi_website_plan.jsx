import { useState } from "react";

const NAV_LINKS = ["Products", "Applications", "Manufacturing", "Certifications", "About", "Contact"];

const PAGES = [
  {
    id: "home",
    en: "Home",
    zh: "首页",
    icon: "⬡",
    color: "#B87333",
    sections: [
      { name: "Hero", desc: "品牌主张 + 核心能力一句话 + 双CTA（获取资料 / 联系我们）" },
      { name: "数据带", desc: "18+ 产品类型 · 直接工厂 · XX年经验 · XX+客户" },
      { name: "产品能力概览", desc: "铝基板 / 铜基板 / 特殊结构 三栏卡片" },
      { name: "行业应用", desc: "娱乐照明 / 汽车 / 工业电源 / 高端商业照明 图文模块" },
      { name: "为什么选海瑞", desc: "直接工厂（无中间商）/ 快速打样 / 技术支持响应" },
      { name: "认证 & 合规", desc: "UL / IPC / RoHS / IATF Logo带" },
      { name: "底部CTA", desc: "下载 Capability Deck（留邮件） / 发起询价" },
    ],
    keywords: ["copper base MCPCB manufacturer", "metal core PCB China", "MCPCB factory direct"],
    priority: "HIGH",
  },
  {
    id: "products",
    en: "Products & Capabilities",
    zh: "产品能力",
    icon: "◈",
    color: "#60A5FA",
    sections: [
      { name: "铝基板系列", desc: "单面 / 真双层 / 四层 / 塞孔 — 规格表 + 实物图" },
      { name: "铜基板系列", desc: "单面 / 热电分离 / 双层 / 多层 / 真双面 — 完整矩阵" },
      { name: "特殊结构", desc: "铜铝复合 / 埋铜块 / 厚铜板 — 应用场景说明" },
      { name: "参数对比表", desc: "导热系数 / 最大尺寸 / 最小线宽 / 铜厚范围" },
      { name: "打样流程", desc: "5步流程图：NDA → Gerber提交 → 报价 → 确认 → 交付" },
    ],
    keywords: ["copper base PCB types", "MCPCB product matrix", "thermal isolation PCB"],
    priority: "HIGH",
  },
  {
    id: "applications",
    en: "Applications",
    zh: "行业应用",
    icon: "◎",
    color: "#4ADE80",
    sections: [
      { name: "娱乐 & 舞台照明", desc: "水景装置 / 舞台灯 / 圆形异形板 — 对应WET类客户" },
      { name: "汽车电子", desc: "车灯 / OBC / 新能源功率模块 — IATF16949背书" },
      { name: "工业电源", desc: "IDC服务器电源 / 变频器 / 工业照明" },
      { name: "高端商业照明", desc: "景观灯 / 防爆灯 / 轨道灯" },
    ],
    keywords: ["MCPCB for entertainment lighting", "copper PCB automotive", "LED driver board"],
    priority: "MEDIUM",
  },
  {
    id: "manufacturing",
    en: "Manufacturing",
    zh: "制造能力",
    icon: "⚙",
    color: "#F59E0B",
    sections: [
      { name: "工厂概览", desc: "东莞工厂实景 / 车间图 / 设备照片" },
      { name: "生产流程", desc: "原材料检验 → 钻孔 → 压合 → 蚀刻 → 检测 步骤图" },
      { name: "品质管控", desc: "AOI自动光学检测 / 热冲击测试 / 剥离强度测试" },
      { name: "交期承诺", desc: "快板：5-7天 / 标准：10-15天 / 批量：按需" },
    ],
    keywords: ["MCPCB manufacturer China", "copper PCB factory Dongguan"],
    priority: "MEDIUM",
  },
  {
    id: "certifications",
    en: "Certifications",
    zh: "认证资质",
    icon: "✦",
    color: "#A78BFA",
    sections: [
      { name: "认证列表", desc: "UL / IPC-6012 / RoHS / ISO9001 / IATF16949 — 证书扫描件可下载" },
      { name: "材料合规", desc: "无卤 / 无铅 / 符合REACH" },
      { name: "测试能力", desc: "热阻测试 / 绝缘测试 / 剥离强度" },
    ],
    keywords: ["UL certified MCPCB", "IPC-6012 copper PCB", "RoHS compliant metal core PCB"],
    priority: "HIGH",
  },
  {
    id: "about",
    en: "About",
    zh: "关于我们",
    icon: "◉",
    color: "#FB923C",
    sections: [
      { name: "公司简介", desc: "海瑞集成 · 东莞 · 专注金属基板" },
      { name: "核心优势", desc: "直接工厂 / 完整产品矩阵 / 工程支持" },
      { name: "团队", desc: "技术团队简介（可选）" },
    ],
    keywords: [],
    priority: "LOW",
  },
  {
    id: "contact",
    en: "Contact",
    zh: "联系我们",
    icon: "◌",
    color: "#34D399",
    sections: [
      { name: "询价表单", desc: "产品类型 / 数量 / 上传Gerber / 联系方式" },
      { name: "Capability Deck下载", desc: "留邮件换资料（lead gen）" },
      { name: "联系方式", desc: "Email / WhatsApp / 公司地址" },
    ],
    keywords: [],
    priority: "HIGH",
  },
];

const DESIGN = [
  { label: "主色调", value: "深海军蓝 #050A14", dot: "#050A14", border: "#333" },
  { label: "铜色强调", value: "#B87333（和产品呼应）", dot: "#B87333", border: "transparent" },
  { label: "次强调", value: "冰蓝 #60A5FA", dot: "#60A5FA", border: "transparent" },
  { label: "正文", value: "#CBD5E1 浅灰", dot: "#CBD5E1", border: "transparent" },
  { label: "标题字体", value: "Syne（重磅几何感）", dot: null },
  { label: "正文字体", value: "IBM Plex Mono（技术感）", dot: null },
  { label: "整体风格", value: "工业精密 · 深色主题 · 铜色点缀", dot: null },
];

const TECH = [
  { item: "建议平台", value: "Webflow（无需编程，可自维护）" },
  { item: "备选", value: "WordPress + Elementor" },
  { item: "域名", value: "hairi-pcb.com 或 hairipcb.com" },
  { item: "托管", value: "Webflow CDN 或 Cloudflare" },
  { item: "表单", value: "Tally.so（免费，支持文件上传）" },
  { item: "分析", value: "Google Analytics 4 + Search Console" },
  { item: "预计开发周期", value: "4–6周（外包）/ 2–3周（模板快速上线）" },
  { item: "预计费用", value: "¥8,000–15,000（外包）或 ¥0（自建Webflow）" },
];

// ── Mini Homepage Preview ─────────────────────────────────────
function HomepagePreview() {
  return (
    <div style={{
      background: "#050A14",
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #1E293B",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
    }}>
      {/* Nav */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 20px",
        background: "rgba(5,10,20,0.95)",
        borderBottom: "1px solid #1E293B",
      }}>
        <div style={{ fontWeight: 700, color: "#B87333", fontSize: 13, letterSpacing: 2 }}>
          HAIRI <span style={{ color: "#475569" }}>INTEGRATION</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Products","Applications","Certifications","Contact"].map(n => (
            <span key={n} style={{ color: "#64748B", fontSize: 9, letterSpacing: 1 }}>{n}</span>
          ))}
        </div>
        <div style={{
          background: "#B87333", color: "#050A14",
          padding: "4px 12px", borderRadius: 4,
          fontWeight: 700, fontSize: 9, letterSpacing: 1,
        }}>
          GET QUOTE
        </div>
      </div>

      {/* Hero */}
      <div style={{
        padding: "40px 24px 32px",
        background: "linear-gradient(135deg, #050A14 0%, #0A1628 50%, #0D1F1A 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* background copper circle */}
        <div style={{
          position: "absolute", right: -60, top: -60,
          width: 280, height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,115,51,0.12) 0%, transparent 70%)",
        }} />
        <div style={{ color: "#B87333", fontSize: 9, letterSpacing: 3, marginBottom: 12 }}>
          COPPER-BASE MCPCB · DIRECT FACTORY · DONGGUAN, CHINA
        </div>
        <div style={{
          fontSize: 22, fontWeight: 700, color: "#F8FAFC",
          lineHeight: 1.2, marginBottom: 8,
          fontFamily: "Georgia, serif",
        }}>
          Where Heat Meets<br />
          <span style={{ color: "#B87333" }}>Precision.</span>
        </div>
        <div style={{ color: "#64748B", fontSize: 10, lineHeight: 1.6, maxWidth: 320, marginBottom: 20 }}>
          Specialized metal-core PCB manufacturer for demanding thermal applications.
          Copper-base · Aluminum-base · Custom form factors.
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{
            background: "#B87333", color: "#050A14",
            padding: "8px 16px", borderRadius: 6,
            fontWeight: 700, fontSize: 9, letterSpacing: 1,
          }}>
            DOWNLOAD CAPABILITY DECK
          </div>
          <div style={{
            border: "1px solid #B87333", color: "#B87333",
            padding: "8px 16px", borderRadius: 6,
            fontSize: 9, letterSpacing: 1,
          }}>
            CONTACT ENGINEER
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "flex", gap: 0, marginTop: 32,
          borderTop: "1px solid #1E293B", paddingTop: 20,
        }}>
          {[["18+","Product Types"],["Direct","Factory"],["5–7","Days Sample"],["100%","IPC Compliant"]].map(([v,l]) => (
            <div key={l} style={{ flex: 1, textAlign: "center", borderRight: "1px solid #1E293B", padding: "0 8px" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#B87333" }}>{v}</div>
              <div style={{ fontSize: 8, color: "#475569", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Capability cards */}
      <div style={{ padding: "20px 24px", background: "#080D1A" }}>
        <div style={{ fontSize: 9, color: "#475569", letterSpacing: 2, marginBottom: 14 }}>PRODUCT CAPABILITIES</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { title: "Aluminum Base", count: "5 types", color: "#60A5FA", icon: "▨" },
            { title: "Copper Base", count: "9 types", color: "#B87333", icon: "▣" },
            { title: "Special Structures", count: "4 types", color: "#A78BFA", icon: "◈" },
          ].map(c => (
            <div key={c.title} style={{
              background: "#0F172A",
              border: `1px solid ${c.color}22`,
              borderRadius: 8, padding: "14px 12px",
            }}>
              <div style={{ fontSize: 16, marginBottom: 6 }}>{c.icon}</div>
              <div style={{ color: c.color, fontSize: 10, fontWeight: 700 }}>{c.title}</div>
              <div style={{ color: "#475569", fontSize: 8, marginTop: 3 }}>{c.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div style={{ padding: "20px 24px", borderTop: "1px solid #1E293B" }}>
        <div style={{ fontSize: 9, color: "#475569", letterSpacing: 2, marginBottom: 14 }}>INDUSTRIES WE SERVE</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Entertainment & Stage Lighting","Automotive Electronics","Industrial Power","Architectural Lighting"].map(app => (
            <div key={app} style={{
              padding: "6px 12px",
              border: "1px solid #1E293B",
              borderRadius: 20, fontSize: 8, color: "#64748B",
            }}>
              {app}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: "12px 24px",
        background: "#B87333",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ color: "#050A14", fontSize: 10, fontWeight: 700 }}>
          Ready to discuss your thermal management challenge?
        </div>
        <div style={{ color: "#050A14", fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>
          GET IN TOUCH →
        </div>
      </div>
    </div>
  );
}

// ── Page Card ─────────────────────────────────────────────────
function PageCard({ page, selected, onClick }) {
  const priorityColor = { HIGH: "#4ADE80", MEDIUM: "#F59E0B", LOW: "#64748B" };
  return (
    <div
      onClick={onClick}
      style={{
        background: selected ? "#0F172A" : "#080D1A",
        border: `1px solid ${selected ? page.color + "55" : "#1E293B"}`,
        borderRadius: 10, padding: "14px 16px",
        cursor: "pointer", transition: "all 0.15s",
        borderLeft: `3px solid ${selected ? page.color : "#1E293B"}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: page.color, fontSize: 14 }}>{page.icon}</span>
          <span style={{ color: "#F8FAFC", fontSize: 12, fontWeight: 600 }}>{page.en}</span>
          <span style={{ color: "#475569", fontSize: 10 }}>/ {page.zh}</span>
        </div>
        <span style={{
          fontSize: 9, padding: "2px 7px", borderRadius: 10,
          background: priorityColor[page.priority] + "22",
          color: priorityColor[page.priority],
          fontWeight: 600,
        }}>
          {page.priority}
        </span>
      </div>
      {selected && (
        <div style={{ marginTop: 12 }}>
          {page.sections.map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, marginBottom: 8,
              paddingBottom: 8, borderBottom: i < page.sections.length - 1 ? "1px solid #1E293B" : "none",
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 4,
                background: page.color + "22", color: page.color,
                fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontWeight: 700,
              }}>
                {i + 1}
              </div>
              <div>
                <div style={{ color: "#CBD5E1", fontSize: 11, fontWeight: 600 }}>{s.name}</div>
                <div style={{ color: "#475569", fontSize: 10, marginTop: 2, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
          {page.keywords.length > 0 && (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 9, color: "#475569", marginBottom: 6, letterSpacing: 1 }}>SEO 关键词</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {page.keywords.map(k => (
                  <span key={k} style={{
                    fontSize: 9, padding: "2px 8px",
                    background: "#0F172A", border: "1px solid #1E293B",
                    borderRadius: 4, color: "#60A5FA",
                  }}>{k}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────
export default function WebsitePlan() {
  const [tab, setTab] = useState("sitemap");
  const [selected, setSelected] = useState("home");

  const tabs = [
    { id: "sitemap", label: "页面结构" },
    { id: "preview", label: "首页预览" },
    { id: "design", label: "设计规范" },
    { id: "tech", label: "技术选型" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050A14",
      color: "#CBD5E1",
      fontFamily: "'IBM Plex Mono', 'Noto Sans SC', monospace",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#B87333", marginBottom: 6 }}>
            HAIRI INTEGRATION · WEBSITE PLAN
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#F8FAFC", margin: 0 }}>
            官网规划方案
          </h1>
          <div style={{ fontSize: 11, color: "#475569", marginTop: 4 }}>
            目标受众：北美 / 欧洲 硬件工程师 & 采购决策人
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #1E293B", paddingBottom: 0 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "8px 18px",
              background: "transparent", border: "none",
              borderBottom: `2px solid ${tab === t.id ? "#B87333" : "transparent"}`,
              color: tab === t.id ? "#B87333" : "#475569",
              fontSize: 11, cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.15s",
              marginBottom: -1,
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Sitemap tab */}
        {tab === "sitemap" && (
          <div>
            <div style={{ fontSize: 10, color: "#475569", marginBottom: 16 }}>
              点击页面卡片展开内容规划 · 优先级：
              <span style={{ color: "#4ADE80", marginLeft: 8 }}>● HIGH</span>
              <span style={{ color: "#F59E0B", marginLeft: 8 }}>● MEDIUM</span>
              <span style={{ color: "#64748B", marginLeft: 8 }}>● LOW</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PAGES.map(p => (
                <PageCard
                  key={p.id} page={p}
                  selected={selected === p.id}
                  onClick={() => setSelected(selected === p.id ? null : p.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Preview tab */}
        {tab === "preview" && (
          <div>
            <div style={{ fontSize: 10, color: "#475569", marginBottom: 16 }}>
              首页视觉方向预览 · 实际开发时细节会更丰富
            </div>
            <HomepagePreview />
            <div style={{
              marginTop: 16, padding: "14px 18px",
              background: "#080D1A", border: "1px solid #1E293B", borderRadius: 10,
              fontSize: 11, color: "#64748B", lineHeight: 1.7,
            }}>
              <span style={{ color: "#B87333", fontWeight: 700 }}>设计核心思路：</span>
              铜色（#B87333）作为主强调色与产品直接呼应，深色背景凸显工业精密感。
              Hero区主标语「Where Heat Meets Precision」点明核心价值（散热+精度）。
              首屏必须包含 Capability Deck 下载入口——这是最重要的 lead gen 钩子。
            </div>
          </div>
        )}

        {/* Design tab */}
        {tab === "design" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {DESIGN.map(d => (
              <div key={d.label} style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "#080D1A", border: "1px solid #1E293B",
                borderRadius: 8, padding: "12px 16px",
              }}>
                {d.dot !== null ? (
                  <div style={{
                    width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                    background: d.dot,
                    border: `1px solid ${d.border || "transparent"}`,
                  }} />
                ) : (
                  <div style={{
                    width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                    background: "#0F172A", border: "1px solid #1E293B",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, color: "#475569",
                  }}>Aa</div>
                )}
                <div>
                  <div style={{ fontSize: 10, color: "#475569", marginBottom: 2 }}>{d.label}</div>
                  <div style={{ fontSize: 12, color: "#CBD5E1", fontWeight: 500 }}>{d.value}</div>
                </div>
              </div>
            ))}
            <div style={{
              marginTop: 8, padding: "14px 16px",
              background: "#080D1A", border: "1px solid #B8733322",
              borderRadius: 10, fontSize: 11, color: "#64748B", lineHeight: 1.7,
            }}>
              <span style={{ color: "#B87333" }}>为什么用深色主题？</span>
              &nbsp;90% 的竞争对手（国内MCPCB厂）网站都是白底+蓝色，深色工业风能让海瑞在北美工程师眼中显得更高端、更有辨识度。铜色强调色与产品属性高度一致，是天然的品牌记忆点。
            </div>
          </div>
        )}

        {/* Tech tab */}
        {tab === "tech" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TECH.map(t => (
              <div key={t.item} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "#080D1A", border: "1px solid #1E293B",
                borderRadius: 8, padding: "12px 18px",
              }}>
                <div style={{ fontSize: 11, color: "#475569" }}>{t.item}</div>
                <div style={{ fontSize: 11, color: "#CBD5E1", fontWeight: 500, textAlign: "right" }}>{t.value}</div>
              </div>
            ))}
            <div style={{
              marginTop: 8, padding: "16px 18px",
              background: "#080D1A", border: "1px solid #1E293B",
              borderRadius: 10,
            }}>
              <div style={{ fontSize: 11, color: "#B87333", fontWeight: 700, marginBottom: 10 }}>
                推荐启动路径
              </div>
              {[
                ["Week 1–2", "确定域名 + 企业邮箱 + Webflow 账号", "#60A5FA"],
                ["Week 3–4", "收集素材 + 选定模板 + 配置设计规范", "#F59E0B"],
                ["Week 5–6", "逐页填充内容 + SEO配置 + 测试", "#B87333"],
                ["Week 7",   "上线 + Google Search Console提交", "#4ADE80"],
              ].map(([w, desc, c]) => (
                <div key={w} style={{
                  display: "flex", gap: 14, marginBottom: 10,
                  paddingBottom: 10, borderBottom: "1px solid #1E293B",
                }}>
                  <div style={{
                    fontSize: 9, color: c, fontWeight: 700,
                    minWidth: 60, paddingTop: 2,
                  }}>{w}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>{desc}</div>
                </div>
              ))}
              <div style={{ fontSize: 10, color: "#475569", marginTop: 4 }}>
                * 优先用模板快速上线（4周），完美是完成的敌人
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
