export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}
