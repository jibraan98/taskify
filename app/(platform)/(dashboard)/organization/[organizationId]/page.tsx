import { getUserId } from "@/clerk-hook/page";
import { getOrgId } from "@/clerk-hook/page";
import { OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationIdPage = () => {
    const userId = getUserId();
    const orgId = getOrgId();

  return (
    <div>
       Organization Page
    </div>
  )
}

export default OrganizationIdPage;
