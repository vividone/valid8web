import {
    DashboardIcon,
    StudentIcon,
    VerifierIcon,
    BillersIcon,
    LogsIcon,
} from "@/components/icons/icons"

export const adminMenue = [
    {
        Name: "Dashboard",
        route: `/admin/dashboard`,
        Icon: DashboardIcon,
    },
    {
        Name: "Students",
        route: "/admin/students",
        Icon: StudentIcon,
    },
    {
        Name: "Verifiers",
        route: "/admin/verifiers",
        Icon: VerifierIcon,
    },
    {
        Name: "Billings",
        route: "/admin/billings",
        Icon:  BillersIcon,
    },
    {
        Name: "Logs",
        route: "/admin/logs",
        Icon: LogsIcon,
    },
];

// -------> SUPERADMIN MENUE<-------

export const superAdmin = [
    {
        Name: "Dashboard",
        route: `/admin/dashboard`,
        Icon: DashboardIcon,
    },
    {
        Name: "Students",
        route: "/admin/Students",
        Icon: StudentIcon,
    },
    {
        Name: "Verifiers",
        route: "/admin/verifiers",
        Icon: VerifierIcon,
    },
    {
        Name: "Billings",
        route: "/admin/Billings",
        Icon:  BillersIcon,
    },
    {
        Name: "Logs",
        route: "/admin/logs",
        Icon: LogsIcon,
    },
];