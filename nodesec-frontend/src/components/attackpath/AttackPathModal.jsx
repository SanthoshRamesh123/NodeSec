import React from "react";

const AttackPathModal = ({ open, onClose, finding }) => {

    if (!open || !finding) return null;

    const workflowSteps = [
        {
            step: 1,
            title: "Reconnaissance",
            description:
                "Attacker identifies the domain and checks DNS records including SPF.",
            icon: "🌐",
            risk: "LOW RISK",
            riskColor: "#22c55e",
        },
        {
            step: 2,
            title: "SPF Check",
            description:
                "Attacker verifies SPF is missing or misconfigured allowing spoofing.",
            icon: "📧",
            risk: "MEDIUM RISK",
            riskColor: "#f59e0b",
        },
        {
            step: 3,
            title: "Craft Spoofed Email",
            description:
                "Attacker forges emails using the victim domain as sender.",
            icon: "🎭",
            risk: "MEDIUM RISK",
            riskColor: "#f59e0b",
        },
        {
            step: 4,
            title: "Send to Target",
            description:
                "Spoofed emails are sent to employees or customers.",
            icon: "👤",
            risk: "HIGH RISK",
            riskColor: "#ef4444",
        },
        {
            step: 5,
            title: "Potential Impact",
            description:
                "Recipients may be tricked into phishing, leaks, or financial loss.",
            icon: "⚠️",
            risk: "HIGH RISK",
            riskColor: "#ef4444",
        },
    ];

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                padding: "20px",
            }}
        >

            {/* MODAL */}
            <div
                style={{
                    width: "95%",
                    maxWidth: "1400px",
                    background:
                        "linear-gradient(135deg, #0f172a, #111827, #020617)",
                    borderRadius: "20px",
                    padding: "30px",
                    border: "1px solid #1e293b",
                    boxShadow: "0 0 40px rgba(0,0,0,0.5)",
                    overflowY: "auto",
                    maxHeight: "95vh",
                }}
            >

                {/* HEADER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "30px",
                    }}
                >
                    <div>
                        <h1
                            style={{
                                margin: 0,
                                color: "#fff",
                                fontSize: "42px",
                                fontWeight: "800",
                            }}
                        >
                            Attack Path Analysis
                        </h1>

                        <p
                            style={{
                                color: "#9ca3af",
                                marginTop: "10px",
                                fontSize: "18px",
                            }}
                        >
                            {finding.rule_id} — {finding.title}
                        </p>

                        {/* RISK BADGE */}
                        <div
                            style={{
                                marginTop: "18px",
                            }}
                        >
                            <span
                                style={{
                                    background: "#1d4ed8",
                                    color: "#fff",
                                    padding: "10px 18px",
                                    borderRadius: "999px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                }}
                            >
                                MEDIUM RISK
                            </span>
                        </div>
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        style={{
                            border: "none",
                            background: "#ef4444",
                            color: "#fff",
                            padding: "14px 22px",
                            borderRadius: "12px",
                            fontWeight: "700",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Close
                    </button>
                </div>

                {/* TABS */}
                <div
                    style={{
                        display: "flex",
                        gap: "40px",
                        borderBottom: "1px solid #1e293b",
                        paddingBottom: "14px",
                        marginBottom: "30px",
                    }}
                >
                    {["Overview", "Workflow", "Path Details", "Recommendations"].map(
                        (tab, index) => (
                            <div
                                key={index}
                                style={{
                                    color:
                                        tab === "Workflow"
                                            ? "#fff"
                                            : "#94a3b8",
                                    fontWeight:
                                        tab === "Workflow"
                                            ? "700"
                                            : "500",
                                    borderBottom:
                                        tab === "Workflow"
                                            ? "3px solid #2563eb"
                                            : "none",
                                    paddingBottom: "10px",
                                    cursor: "pointer",
                                }}
                            >
                                {tab}
                            </div>
                        )
                    )}
                </div>

                {/* WORKFLOW TITLE */}
                <div style={{ marginBottom: "30px" }}>
                    <h2
                        style={{
                            color: "#fff",
                            marginBottom: "10px",
                        }}
                    >
                        Attack Workflow
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "17px",
                        }}
                    >
                        This workflow shows how an attacker can exploit
                        the missing SPF email protection.
                    </p>
                </div>

                {/* WORKFLOW STEPS */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        overflowX: "auto",
                        paddingBottom: "20px",
                    }}
                >
                    {workflowSteps.map((item, index) => (
                        <React.Fragment key={index}>

                            {/* CARD */}
                            <div
                                style={{
                                    minWidth: "240px",
                                    background:
                                        "rgba(30,41,59,0.85)",
                                    border: "1px solid #334155",
                                    borderRadius: "18px",
                                    padding: "24px",
                                    position: "relative",
                                    boxShadow:
                                        "0 0 25px rgba(0,0,0,0.35)",
                                }}
                            >

                                {/* STEP NUMBER */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "14px",
                                        left: "14px",
                                        width: "34px",
                                        height: "34px",
                                        borderRadius: "50%",
                                        background: "#1d4ed8",
                                        color: "#fff",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontWeight: "700",
                                    }}
                                >
                                    {item.step}
                                </div>

                                {/* ICON */}
                                <div
                                    style={{
                                        fontSize: "48px",
                                        textAlign: "center",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    {item.icon}
                                </div>

                                {/* TITLE */}
                                <h3
                                    style={{
                                        color: "#fff",
                                        textAlign: "center",
                                        marginBottom: "16px",
                                        minHeight: "50px",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p
                                    style={{
                                        color: "#cbd5e1",
                                        textAlign: "center",
                                        lineHeight: "1.7",
                                        fontSize: "14px",
                                        minHeight: "100px",
                                    }}
                                >
                                    {item.description}
                                </p>

                                {/* RISK */}
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginTop: "18px",
                                        fontWeight: "700",
                                        color: item.riskColor,
                                    }}
                                >
                                    {item.risk}
                                </div>
                            </div>

                            {/* ARROW */}
                            {index !== workflowSteps.length - 1 && (
                                <div
                                    style={{
                                        color: "#94a3b8",
                                        fontSize: "40px",
                                        margin: "0 18px",
                                        fontWeight: "300",
                                    }}
                                >
                                    →
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* SUMMARY */}
                <div
                    style={{
                        marginTop: "40px",
                    }}
                >
                    <h2
                        style={{
                            color: "#fff",
                            marginBottom: "24px",
                        }}
                    >
                        Workflow Summary
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                        }}
                    >

                        <div
                            style={{
                                color: "#cbd5e1",
                                fontSize: "17px",
                            }}
                        >
                            ✅ This attack path is possible due to the absence of SPF email protection.
                        </div>

                        <div
                            style={{
                                color: "#cbd5e1",
                                fontSize: "17px",
                            }}
                        >
                            ℹ️ Implementing SPF can block spoofed emails and prevent this attack path.
                        </div>

                        <div
                            style={{
                                color: "#cbd5e1",
                                fontSize: "17px",
                            }}
                        >
                            🛡️ Recommended Action: Configure SPF record for your domain to validate legitimate senders.
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "40px",
                    }}
                >
                    <button
                        style={{
                            background: "transparent",
                            border: "1px solid #2563eb",
                            color: "#60a5fa",
                            padding: "14px 24px",
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "15px",
                        }}
                    >
                        👁 View Attack Path
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AttackPathModal;