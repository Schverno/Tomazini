import { PageWrapper } from "../components/page-wrapper";
import FooterIn from "../components/footerIn";
import Header from "../components/header"

export default function Esg() {
  return (
    <PageWrapper  >
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50">
        <h1>ESG</h1>
      </main>
      <FooterIn />
    </PageWrapper>
  );
}