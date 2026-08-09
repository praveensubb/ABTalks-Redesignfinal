import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getCertificate } from "../services/api";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Certificate() {
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const certificateRef = useRef(null);

  useEffect(() => {
    loadCertificate();
  }, []);

  async function loadCertificate() {
    try {
      const student = JSON.parse(localStorage.getItem("student"));

      if (!student) {
        window.location.href = "/login";
        return;
      }

      const data = await getCertificate(student.id);

      setCertificate(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function downloadCertificate() {
    try {
      const input = certificateRef.current;

      const canvas = await html2canvas(input, {
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF(
        "landscape",
        "mm",
        "a4"
      );

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save(
        `${certificate.name}-Certificate.pdf`
      );
    } catch (error) {
      alert("Unable to generate PDF.");
      console.error(error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-lg">

          <h1 className="text-4xl font-bold text-red-600">
            🔒 Certificate Locked
          </h1>

          <p className="mt-5 text-gray-600">
            {error}
          </p>

          <Link
            to="/dashboard"
            className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">

      <div
        ref={certificateRef}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full text-center"
      >

        <h1 className="text-5xl font-bold text-indigo-700">
          🏆 Certificate of Completion
        </h1>

        <p className="mt-8 text-lg text-gray-600">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="text-4xl font-bold text-black mt-4">
          {certificate.name}
        </h2>

        <p className="mt-8 text-lg text-gray-700">
          For successfully completing the
        </p>

        <h3 className="text-3xl font-bold text-indigo-600 mt-3">
          ABTalks 60-Day Coding Challenge
        </h3>

        <p className="mt-6 text-gray-500">
          Congratulations on your dedication and consistency.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-gray-100 rounded-xl p-5">

            <h3 className="font-semibold">
              Completed Days
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              {certificate.completed_days}
            </p>

          </div>

          <div className="bg-gray-100 rounded-xl p-5">

            <h3 className="font-semibold">
              Student Rank
            </h3>

            <p className="text-3xl font-bold text-indigo-600 mt-2">
              #{certificate.rank}
            </p>

          </div>

        </div>

      </div>

      <div className="fixed bottom-8 right-8 flex gap-4">

        <button
          onClick={downloadCertificate}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        >
          📄 Download PDF
        </button>

        <Link
          to="/dashboard"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          Dashboard
        </Link>

      </div>

    </div>
  );
}

export default Certificate;