import Image from "next/image";

export default function EcommerceDashboard() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-[4%] py-8">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="/work/ui-project" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to UI Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Wecaredrugstores — A Pharmacy E-Commerce Application</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A web-based pharmacy e-commerce application designed to make purchasing medications and healthcare products fast, secure, and convenient
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">UI/UX Designer, System Design</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">8 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma, Adobe XD</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Wecaredrugstores is a web-based pharmacy e-commerce application designed to make purchasing medications and healthcare products fast, secure, and convenient. The platform empowers users to browse and order medicines online while enabling pharmacy staff to efficiently manage orders, inventory, and customers through a dedicated Admin Dashboard.
            </p>
            <p className="text-white/70 leading-relaxed">
              This case study highlights the design and functional approach used in building Wecaredrugstores&apos; MVP version — from requirement gathering to feature definition and user experience design.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💊</div>
              <p className="text-white/60 text-lg">Wecaredrugstores Preview</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Introduction</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Purpose</h4>
              <p className="text-white/70 leading-relaxed">
                The purpose of this project was to develop a comprehensive online pharmacy store that bridges accessibility and trust in healthcare delivery. This case study outlines the software and UX requirements, serving as a blueprint for the development and design team to understand the system&apos;s structure, functionalities, and performance expectations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Scope</h4>
              <p className="text-white/70 leading-relaxed mb-4">
                The application consists of two major modules:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">WebApp (User-facing E-commerce Store)</h5>
                  <p className="text-white/70 text-sm">Where customers can register, browse medications, make purchases, upload proof of payment, and track their orders.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">Admin Module (Pharmacy Staff Dashboard)</h5>
                  <p className="text-white/70 text-sm">Where administrators manage inventory, process orders, monitor transactions, and generate sales reports.</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mt-4">
                The system supports multiple payment options — Transfer before ship-out, Cash, and POS at the Store — and is designed to ensure compliance with healthcare regulations and secure data protection practices.
              </p>
            </div>
          </div>
        </div>

        {/* Overall Description */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Overall Description</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Product Perspective</h4>
              <p className="text-white/70 leading-relaxed">
                Wecaredrugstores is envisioned as a modern, secure online pharmacy ecosystem that digitizes both the shopping experience for users and administrative operations for pharmacy staff. Customers can conveniently shop for medications, supplements, and personal care items, while staff can manage the entire backend workflow — from inventory to delivery.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Product Functions</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">User Module</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• User registration, login, and profile management</li>
                    <li>• Product catalog with search, filters, and detailed descriptions</li>
                    <li>• Shopping cart with real-time updates</li>
                    <li>• Checkout process with address management and multiple payment options</li>
                    <li>• Order tracking and history</li>
                    <li>• Option to upload transfer receipts/screenshots for verification</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Admin Module</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Dashboard overview of sales, users, and orders</li>
                    <li>• Order management (confirmations, shipping updates, refunds)</li>
                    <li>• Product management (add/edit/remove products)</li>
                    <li>• Inventory control with stock level tracking and low-stock alerts</li>
                    <li>• User and customer management</li>
                    <li>• Sales performance analytics and reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">User Characteristics</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">General Users</h5>
                  <p className="text-white/70">Customers from various backgrounds, with different levels of technical knowledge, seeking a convenient way to purchase drugs and healthcare products.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">Pharmacy Staff/Admins</h5>
                  <p className="text-white/70">Responsible for order processing, customer support, product listing, and inventory management.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">General Constraints</h4>
              <ul className="space-y-2 text-white/70">
                <li>• Must comply with healthcare regulations and data privacy laws (e.g., patient confidentiality)</li>
                <li>• Must provide secure data storage and encrypted communication</li>
                <li>• Possible integration with existing pharmacy systems for synchronization</li>
                <li>• Reliable access control for admin vs. customer data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specific Requirements */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Specific Requirements</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Functional Requirements</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">User Interface</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Clean, intuitive design with simple navigation</li>
                    <li>• Fully responsive layout across desktop and mobile</li>
                    <li>• Clear product categorization and search experience</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Product Catalog</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Each product includes name, image, description, dosage, price, and brand</li>
                    <li>• Search and filter by brand, health condition, or category</li>
                    <li>• Product reviews and ratings to improve credibility</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Shopping Cart</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Add, remove, and update product quantities</li>
                    <li>• Automatic subtotal and tax calculation</li>
                    <li>• Option for guest checkout</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Checkout</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Multiple shipping addresses</li>
                    <li>• Order summary and confirmation before submission</li>
                    <li>• Secure payment gateway integration</li>
                    <li>• Option to upload transfer receipts for manual verification</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Order Management</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Real-time tracking with status updates</li>
                    <li>• Full order history with filters (pending, shipped, completed)</li>
                    <li>• Returns and refund requests</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Inventory Management</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Automatic stock level updates after each purchase</li>
                    <li>• Low-stock notifications</li>
                    <li>• Reorder management</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#FF6B35] mb-3">Admin Dashboard</h5>
                  <ul className="space-y-2 text-white/70">
                    <li>• Manage orders and verify payments</li>
                    <li>• Add/edit/delete products</li>
                    <li>• View and manage customer data</li>
                    <li>• Generate sales, inventory, and performance reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Approach */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Approach</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Healthcare-Focused Design</h4>
              <p className="text-white/70">
                Implemented a clean, trustworthy design language that prioritizes clarity and accessibility. Used medical blue and green color schemes to convey trust and health, while ensuring high contrast for readability across all age groups.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Security-First Interface</h4>
              <p className="text-white/70">
                Designed with security indicators and clear data protection messaging throughout the user journey. Implemented visual cues for secure transactions and privacy protection to build user confidence in handling sensitive health information.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Mobile-Optimized Experience</h4>
              <p className="text-white/70">
                Created a mobile-first design approach considering that many users may access the platform on-the-go for urgent medication needs. Optimized touch targets and simplified navigation for quick access to essential features.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="space-y-4 text-white mb-6">
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Successfully designed a comprehensive pharmacy e-commerce platform that bridges accessibility and trust in healthcare delivery.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Created a dual-module system supporting both customer-facing e-commerce and administrative operations.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Implemented healthcare compliance considerations and secure data protection practices throughout the design.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Delivered a mobile-optimized experience for urgent medication access needs.</p>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Adobe XD</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">E-commerce Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Healthcare UI</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Admin Dashboard</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Mobile Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">System Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Responsive Design</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project/zenith-mobile"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/ui-project"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Back to UI Projects
          </a>
        </div>
      </div>
    </main>
  );
}

