using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public interface IAddPurchasedCheeses
    {
        void AddPurchasedCheeses(PurchasedCheeseInfo[] cheeses);
    }
}
