# 🚀 Quick Start Guide - Phase 2 Quotations

## For Customers:

### How to Request a Quotation:

1. **Add Products to Cart**
   - Browse products on homepage
   - Click "Add to Cart" on desired products
   - Adjust quantities as needed

2. **Navigate to Cart**
   - Click cart icon in header
   - Review your items

3. **Request Quotation**
   - Click **"📋 Request Quotation"** button
   - Fill in your details:
     - Full Name ✅ (required)
     - Email Address ✅ (required)
     - Phone Number (optional)
     - Delivery Address (optional)
     - Special Instructions (optional)
   - Click **"Generate Quotation"**

4. **Receive Your Quotation**
   - PDF automatically downloads
   - Save quotation number for reference
   - Contact MLU Poultry Farm to proceed

---

## For Admin:

### How to View Quotations:

1. **Login**
   - Go to `/admin`
   - Enter admin credentials

2. **Navigate to Quotations**
   - Click **"📋 View Quotations"** in dashboard header

3. **Manage Quotations**
   - **Filter by status**: Click filter buttons (All, Sent, Accepted, etc.)
   - **Update status**: Use dropdown in each card
   - **Contact customer**:
     - Click 📧 for email
     - Click 💬 for WhatsApp
   - **View details**: All customer info and products shown in card

4. **Track Progress**
   - Sent → Customer received quotation
   - Accepted → Customer agreed to quotation
   - Declined → Customer declined
   - Converted → Turned into actual order

---

## Status Meanings:

| Status | Meaning | Next Action |
|--------|---------|-------------|
| **Sent** | Quotation generated and sent to customer | Wait for customer response |
| **Accepted** | Customer accepted the quotation | Prepare order or convert to order |
| **Declined** | Customer declined the quotation | Follow up or archive |
| **Converted** | Quotation turned into an order | Process as regular order |

---

## Common Questions:

**Q: Can customers edit quotations?**  
A: No, customers must request a new quotation with updated items.

**Q: How long are quotations valid?**  
A: Quotations are valid for 30 days (stated in PDF footer).

**Q: Can I resend a quotation?**  
A: Yes, use the email button in the admin dashboard to contact the customer.

**Q: What happens after a quotation is accepted?**  
A: Update status to "Accepted" and either:
   - Contact customer to place order
   - Update status to "Converted" when order is placed

**Q: Can I delete quotations?**  
A: Not from the interface currently. Use Firebase Console to manually delete if needed.

---

## Email Template Suggestion:

When contacting customers about quotations:

```
Subject: MLU Poultry Farm - Quotation [QUOTATION_NUMBER]

Dear [Customer Name],

Thank you for your interest in MLU Poultry Farm products!

Please find attached your quotation [QUOTATION_NUMBER] for your review.

Our products include:
[List products here]

Total Amount: R[Total]

This quotation is valid for 30 days. 

To proceed with your order:
1. Reply to confirm acceptance
2. We'll arrange delivery
3. Payment on delivery or via EFT

Contact us:
📞 +27 62 247 5462
✉️ info@mlupoultryfarm.co.za

Thank you for choosing MLU Poultry Farm!

Best regards,
MLU Poultry Farm Team
```

---

## WhatsApp Template Suggestion:

```
Hello [Customer Name]! 👋

Thank you for requesting a quotation from MLU Poultry Farm! 🐔

Your Quotation: [QUOTATION_NUMBER]
Total: R[Total]

Products:
[List items]

This quotation is valid for 30 days.

Would you like to proceed with this order?

Reply YES to confirm or let us know if you need any changes!

MLU Poultry Farm (Pty) Ltd
📞 +27 62 247 5462
```

---

## Tips for Admins:

✅ **Check quotations daily** to respond quickly  
✅ **Update statuses** to track progress  
✅ **Follow up** on sent quotations after 2-3 days  
✅ **Convert accepted quotations** to orders promptly  
✅ **Use WhatsApp** for faster customer communication  
✅ **Keep Firebase Console** open to monitor real-time data  

---

**Happy Selling! 🚀🐔📋**
