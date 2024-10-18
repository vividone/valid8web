import {
    DashboardIcon,
    StudentIcon,
    VerifierIcon,
    BillersIcon,
    LogsIcon,
    StaffIcon,
    SettingsIcon,
    InstitutionIcon
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
export const BusinessAdmin = [
    {
        Name: "Dashboard",
        route: `/businessadmin/dashboard`,
        Icon: DashboardIcon,
    },
    {
        Name: "Staff",
        route: "/businessadmin/Staff",
        Icon: StaffIcon,
    },
    {
        Name: "Verifiers",
        route: "/businessadmin/verifiers",
        Icon: VerifierIcon,
    },
    {
        Name: "Billings",
        route: "/businessadmin/Billings",
        Icon:  BillersIcon,
    },
    {
        Name: "Logs",
        route: "/businessadmin/logs",
        Icon: LogsIcon,
    },
];
// -------> SUPERADMIN MENUE<-------

export const superAdmin = [
    {
        Name: "Dashboard",
        route: `/superadmin/dashboard`,
        Icon: DashboardIcon,
    },
    {
        Name: "Institution",
        route: "/superadmin/Institution",
        Icon: InstitutionIcon,
    },
    {
        Name: "Billings",
        route: "/superadmin/Billings",
        Icon:  BillersIcon,
    },
    {
        Name: "Logs",
        route: "/superadmin/logs",
        Icon: LogsIcon,
    },
    {
        Name: "Settings",
        route: "/superadmin/Settings",
        Icon: SettingsIcon,
    },
];