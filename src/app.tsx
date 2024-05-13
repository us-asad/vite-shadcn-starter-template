import { Layout } from "./components/layout";
import { AppRouter } from "./router";
import { ThemeProvider } from "@/components/defaults/theme-provider"

export const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Layout>
      <AppRouter />
    </Layout>
  </ThemeProvider>
)