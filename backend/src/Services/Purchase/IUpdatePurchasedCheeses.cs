using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public interface IUpdatePurchasedCheeses
    {
        void UpdatePurchasedCheeses(PurchasedCheeseInfo[] info);
    }
}
