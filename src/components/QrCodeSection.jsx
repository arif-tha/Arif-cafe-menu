import QRCode from "react-qr-code";

export default function QRCodeSection({ url }) {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="bg-white p-4 rounded-2xl shadow-xl">
        <QRCode value={url} size={140} fgColor="#1f1c2c" />
      </div>
      <p className="mt-2 text-sm opacity-90">Scan for Menu</p>
    </div>
  );
}