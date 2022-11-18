using System.Collections.Generic;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public class PurchasedCheesesService : IPurchaseCheeseService
    {
        public void AddPurchasedCheeses(PurchasedCheeseInfo[] cheeses)
        {
            PurchasedCheesesRepository.PurchasedCheeses.Clear();
            for (int i = 0; i < cheeses.Length; i++)
            {
                if (cheeses[i] != null)
                    PurchasedCheesesRepository.PurchasedCheeses.Add(cheeses[i]);
            }
        }

        IEnumerable<PurchasedCheeseInfo> IGetPurchasedCheeses.GetPurchasedCheese()
        {
            return PurchasedCheesesRepository.PurchasedCheeses;
        }
    }
}
