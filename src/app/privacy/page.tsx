import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pomodash',
  description: 'Learn about our privacy practices and how we handle your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: May 8, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Pomodash. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          This application stores your data locally on your device using IndexedDB. We do not collect or store any personal information on remote servers. The data we store includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Pomodoro timer settings and preferences</li>
          <li>Task and tag information</li>
          <li>Timer history and statistics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Network Usage</h2>
        <p className="mb-4">
          This application only makes network connections for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Checking for application updates</li>
          <li>Downloading new versions of the application when available</li>
        </ul>
        <p className="mb-4">
          No user data is transmitted to any remote servers during these operations. All data remains on your local device.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="mb-4">
          Since all data is stored locally on your device, you have complete control over your data:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>You can access your data directly through the application&apos;s interface</li>
          <li>You can modify or delete your data at any time</li>
          <li>Deleting the application will remove all locally stored data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at dtom90@gmail.com.
        </p>
      </section>
    </div>
  );
}
