import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-8xl font-bold text-brand/20 mb-4">404</div>
      <h1 className="text-3xl font-bold text-charcoal mb-4">الصفحة غير موجودة</h1>
      <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
        عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها.
      </p>
      <Button href="/" variant="primary" size="lg">
        العودة للرئيسية
      </Button>
    </Container>
  );
}
